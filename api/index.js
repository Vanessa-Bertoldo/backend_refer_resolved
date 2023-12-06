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

app.use('/api', createProxyMiddleware({ target: 'http://localhost:3050', changeOrigin: true }));

const port = 3050

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app