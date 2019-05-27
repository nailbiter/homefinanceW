// const proxy = require('http-proxy-middleware');
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy('/api/test', 
        { target: 'http://localhost:3001/' }
    ));
}