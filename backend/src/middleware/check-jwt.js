const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = jwt ({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-010lkk4w.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://e-comerce/api',
    issuer: 'https://dev-010lkk4w.us.auth0.com/',
    algorithms: ['RS256']
});

module.exports = {
    jwtCheck,
}