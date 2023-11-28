const express = require('express')
const routes = require('./routes')
const cors = require('cors');

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilitar cookies em solicitações CORS
}));

const port = 3030

routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app