module.exports = process.env.JSONAPIRESPONSE_COV
    ? require('./lib-cov/json-api-response')
    : require('./lib/json-api-response');