exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const response = await fetch(
      'https://demo-marscotest.gainsightcloud.com/v1.0/api/eventManager/event',
      {
        method: 'POST',
        headers: {
          'topicName':    'Rule Trigger Event',
          'eventName':    'Shaik HTML Test',
          'eventVersion': '1.0',
          'tenantId':     '6998e9cf-b354-450f-80fe-2730b1c1dc61',
          'sharedSecret': 'uy5RgBP+9FfescqwBFjU7fsE/jxH3RI/kkJ+pv5g3D5RuUAprW3+tu5f5MR95x1R',
          'accessKey':    '97f48900-33a5-44f4-b591-6c7a19f01d1a',
          'Content-Type': 'application/json',
        },
        body: event.body,
      }
    );

    const text = await response.text();
    return { statusCode: response.status, body: text };
  } catch (err) {
    return { statusCode: 500, body: err.message };
  }
};
