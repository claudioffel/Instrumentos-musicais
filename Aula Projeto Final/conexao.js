const mysql = require('mysql2')/*estou importando o mysql2*/
//essa variavel conecao esta levando pro banco de dados
const conexao = mysql.createConnection({/*estou criando uma nova conexao*/
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: '33570956',
   database: 'projetoinstrumento'/*estou pegando o banco de dados do instrumento que criei no mySQL*/
})   

module.exports = conexao /*serve para abrir sua conexao em outros lugares de seu projeto*/