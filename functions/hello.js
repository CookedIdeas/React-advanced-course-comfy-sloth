// domain/.netlify/functions/hello

exports.handler = async function (event, content) {
  return {
    statusCode: 200,
    body: 'Hello world',
  };
};
