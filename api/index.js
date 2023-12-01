const express = require('express')
const routes = require('./routes')
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()

app.use(cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

app.use('/api', createProxyMiddleware({ target: 'http://192.168.0.8:3040', changeOrigin: true }));

const port = 3040

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app