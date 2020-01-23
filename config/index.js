const httpStatusInfo = 'http://divtag.com/events/docs/errors/$';

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  API: {
    protocol: 'http://',
    domain: 'localhost',
    ip: 'localhost',
    baseUrl: '/api/v1'
  },
  Mongo: {
    username: '',
    password: '',
    hostname: 'localhost',
    port: '27017',
    dbname: 'eventsDataCenter'
  },
  HTTP_STATUS: {
    BAD_REQUEST: {
      status : 400, 
      message:'Bad Request',
      code: 3001, 
      info: httpStatusInfo.replace('$', '3001')
    },
    AUTHENTICATE: {
      status : 401, 
      message:'Authenticate',
      code: 3002, 
      info: httpStatusInfo.replace('$', '3002')
    },
    NOT_FOUND: {
      status : 404, 
      message:'Not found',
      code: 3003, 
      info: httpStatusInfo.replace('$', '3003')
    }
  }
}