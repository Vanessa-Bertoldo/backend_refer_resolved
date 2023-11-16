// db.js ou index.js
const conectarAoBanco = require('./db');
const Usuario = require('./models/usuario');

async function inicializar() {
  await conectarAoBanco();

  // Sincronize o modelo com o banco de dados
  await Usuario.sync();

  console.log('Modelo "Usuarios" sincronizado com o banco de dados.');

  // Adicione aqui outras operações relacionadas à inicialização do aplicativo
}

inicializar();
