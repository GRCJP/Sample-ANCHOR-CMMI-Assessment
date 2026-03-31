const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand, PutCommand, DeleteCommand, QueryCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' });
const dynamodb = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { action, pk, sk, data, filterExpression, expressionValues } = body;
    const tableName = process.env.DYNAMODB_TABLE || 'anchor-platform-data';

    switch (action) {

      // --- Generic CRUD by pk + sk ---

      case 'getItem': {
        if (!pk || !sk) {
          return { statusCode: 400, headers, body: JSON.stringify({ success: false, error: 'pk and sk are required' }) };
        }
        const result = await dynamodb.send(new GetCommand({
          TableName: tableName,
          Key: { pk, sk }
        }));
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, item: result.Item || null })
        };
      }

      case 'putItem': {
        if (!pk || !sk) {
          return { statusCode: 400, headers, body: JSON.stringify({ success: false, error: 'pk and sk are required' }) };
        }
        const item = {
          ...(data || {}),
          pk,
          sk,
          updatedAt: new Date().toISOString()
        };
        await dynamodb.send(new PutCommand({ TableName: tableName, Item: item }));
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, item })
        };
      }

      case 'deleteItem': {
        if (!pk || !sk) {
          return { statusCode: 400, headers, body: JSON.stringify({ success: false, error: 'pk and sk are required' }) };
        }
        await dynamodb.send(new DeleteCommand({
          TableName: tableName,
          Key: { pk, sk }
        }));
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true })
        };
      }

      case 'queryItems': {
        if (!pk) {
          return { statusCode: 400, headers, body: JSON.stringify({ success: false, error: 'pk is required' }) };
        }
        const queryParams = {
          TableName: tableName,
          KeyConditionExpression: 'pk = :pk',
          ExpressionAttributeValues: { ':pk': pk }
        };
        // Optional sk prefix filter
        if (sk) {
          queryParams.KeyConditionExpression += ' AND begins_with(sk, :sk)';
          queryParams.ExpressionAttributeValues[':sk'] = sk;
        }
        const result = await dynamodb.send(new QueryCommand(queryParams));
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, items: result.Items, count: result.Count })
        };
      }

      case 'scanItems': {
        const scanParams = { TableName: tableName };
        if (filterExpression) {
          scanParams.FilterExpression = filterExpression;
          scanParams.ExpressionAttributeValues = expressionValues || {};
        }
        const result = await dynamodb.send(new ScanCommand(scanParams));
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, items: result.Items, count: result.Count })
        };
      }

      // --- Legacy / convenience actions ---

      case 'getAssessments': {
        const result = await dynamodb.send(new ScanCommand({
          TableName: tableName,
          FilterExpression: '#t = :type',
          ExpressionAttributeNames: { '#t': 'type' },
          ExpressionAttributeValues: { ':type': 'assessment' }
        }));
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, data: result.Items })
        };
      }

      case 'getAssessment': {
        const { assessmentId } = body;
        if (!assessmentId) {
          return { statusCode: 400, headers, body: JSON.stringify({ success: false, error: 'Assessment ID required' }) };
        }
        const result = await dynamodb.send(new GetCommand({
          TableName: tableName,
          Key: { pk: `ASSESSMENT#${assessmentId}`, sk: 'META' }
        }));
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ success: true, data: result.Item })
        };
      }

      case 'saveAssessment': {
        const { assessmentId, userId } = body;
        if (!assessmentId || !data) {
          return { statusCode: 400, headers, body: JSON.stringify({ success: false, error: 'Assessment ID and data required' }) };
        }
        await dynamodb.send(new PutCommand({
          TableName: tableName,
          Item: {
            pk: `ASSESSMENT#${assessmentId}`,
            sk: 'META',
            type: 'assessment',
            ...data,
            lastModified: new Date().toISOString(),
            modifiedBy: userId
          }
        }));
        return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
      }

      case 'logActivity': {
        const { userId } = body;
        if (!data) {
          return { statusCode: 400, headers, body: JSON.stringify({ success: false, error: 'Activity data required' }) };
        }
        const activityId = `activity_${Date.now()}`;
        await dynamodb.send(new PutCommand({
          TableName: tableName,
          Item: {
            pk: `ACTIVITY#${new Date().toISOString().split('T')[0]}`,
            sk: activityId,
            type: 'activity',
            ...data,
            timestamp: new Date().toISOString()
          }
        }));
        return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
      }

      default:
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ success: false, error: `Unknown action: ${action}` })
        };
    }
  } catch (error) {
    console.error('Data lambda error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: error.message || 'Database operation failed' })
    };
  }
};
