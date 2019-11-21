const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
       target: 'https://easy-mock.com/mock/5dd0c6bacf8d630c68faf04f/rabsys',
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "/api": "/"
     }
	}));
};