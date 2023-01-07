const express = require('express')/*criando um servidor, criei uma variavel constante*/
const conexao = require('./conexao')
const bodyParser = require('body-parser')
const Cliente = require('./modelo/cliente')
const Funcionario = require('./modelo/funcionario')
const Vende = require('./Modelo/vende')
const Instrumento = require('./modelo/instrumento')

const app = express();/*agora esta apontando pro servidor express*/

app.set('view engine', 'ejs')/*tudo que for carregado de informações, vai visualizado como ejs também, além de html e css*/

app.set('views', './View')/*esta dizendo que todas as vizualizações vão ta na pasta vieww, que é o html e o css*/

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

conexao.connect(erro => {/*criando uma conexao com o baqnco, como se fosse anonima, aqui dentro eu faço o servidor executar*/
if (erro){
    console.log(erro)
}else{
    app.listen(3000,
        ()=> console.log('servidor rodando na porta 3000'))/*se der erro, mostre no console o erro, se não, vai na porta 3000 e exiba essa mensagem*/
    }
})

app.get('/cliente', function(req,res){/*criando uma rota, quando digitar /cliente vai criar uma requisiçãop e uma resposta*/
    //res.sendFile(__dirname+'/View/cliente.html')/*ir no google chrome e digitar "localhost:3000/cliente", criei o de cliente, é o caminho que quero acessar, fazedr o das outras telas tb*/
    conexao.query('SELECT * from cliente', function(erro, resultado){ //query é uma função que vai executar no banco de dados, select vai buscar dados na tabeç cliente, pega as informações e armazena na funcao, conexao é o arquivo que faz a conexao com o banco de dados
        res.render('cliente', {data: resultado}) //quando executa essa função, vai renderizar essa pagina cliente e vai passar o parametro data, que tem o conjunto de dados que veio do banco    
    })
})
//depois de criar o furmulario, ta criando uma nova rota, chamada post
app.post('/cliente/cadastrar', (req, res) => {//pega as informações cadastradas e estão sendo enviadas
   const cliente = req.body //estou pegando os dados do formulario 
   try{//vai tentar um possivel erro
       Cliente.add(cliente)
       conexao.query('SELECT * from cliente', function(erro, resultado){ 
        res.render('cliente', {data: resultado}) 
       })
   }catch(e){//se deu erro, vai pegar o erro tentando no try, então ele vai fazer um tratamento e mostra qual foi o erro apresentado
       console.log('Error: '+e)
   }
})

app.post('/cliente/alterar', (req, res) => {
       const valores = req.body 
       const id = parseInt(req.body.ID)

       console.log(id)
       console.log(valores)
       try{
           Cliente.alterar(id, valores, res)
           conexao.query('SELECT * from cliente', function(erro, resultado){ 
            res.render('cliente', {data: resultado}) 
           })
       }catch(e){
           res.send('Erro: '+e)
       }

})

app.post('/cliente/deletar', (req, res)=>{
       const id = parseInt(req.body.id)
       try{
        Cliente.delete(id, res)
        conexao.query('SELECT * from cliente', function(erro, resultado){ 
         res.render('cliente', {data: resultado}) 
        })
       }catch(e){
           console.log('Error: '+e)
       }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/funcionario', function(req,res){//criando uma rota, quando digitar /cliente vai criar uma requisiçãop e uma resposta
    //res.sendFile(__dirname+'/View/cliente.html')/*ir no google chrome e digitar "localhost:3000/cliente", criei o de cliente, é o caminho que quero acessar, fazedr o das outras telas tb
    conexao.query('SELECT * from funcionario', function(erro, resultado){ //query é uma função que vai executar no banco de dados, select vai buscar dados na tabeç cliente, pega as informações e armazena na funcao, conexao é o arquivo que faz a conexao com o banco de dados
        res.render('funcionario', {data: resultado}) //quando executa essa função, vai renderizar essa pagina cliente e vai passar o parametro data, que tem o conjunto de dados que veio do banco    
    })
})
//depois de criar o furmulario, ta criando uma nova rota, chamada post
app.post('/funcionario/cadastrar', (req, res) => {//pega as informações cadastradas e estão sendo enviadas
   const funcionario = req.body //estou pegando os dados do formulario 
   try{//vai tentar um possivel erro
       Funcionario.add(funcionario)
       conexao.query('SELECT * from funcionario', function(erro, resultado){ 
        res.render('funcionario', {data: resultado}) 
       })
   }catch(e){//se deu erro, vai pegar o erro tentando no try, então ele vai fazer um tratamento e mostra qual foi o erro apresentado
       console.log('Error: '+e)
   }
})

app.post('/funcionario/alterar', (req, res) => {
       const valores = req.body 
       const id = parseInt(req.body.ID)

       console.log(id)
       console.log(valores)
       try{
        Funcionario.alterar(id, valores, res)
           conexao.query('SELECT * from funcionario', function(erro, resultado){ 
            res.render('funcionario', {data: resultado}) 
           })
       }catch(e){
           res.send('Erro: '+e)
       }

})

app.post('/funcionario/deletar', (req, res)=>{
       const id = parseInt(req.body.id)
       try{
        Funcionario.delete(id, res)
        conexao.query('SELECT * from funcionario', function(erro, resultado){ 
         res.render('funcionario', {data: resultado}) 
        })
       }catch(e){
           console.log('Error: '+e)
       }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/vende', function(req,res){/*criando uma rota, quando digitar /cliente vai criar uma requisiçãop e uma resposta*/
    //res.sendFile(__dirname+'/View/cliente.html')/*ir no google chrome e digitar "localhost:3000/cliente", criei o de cliente, é o caminho que quero acessar, fazedr o das outras telas tb*/
    conexao.query('SELECT * from vende', function(erro, resultado){ //query é uma função que vai executar no banco de dados, select vai buscar dados na tabeç cliente, pega as informações e armazena na funcao, conexao é o arquivo que faz a conexao com o banco de dados
        res.render('vende', {data: resultado}) //quando executa essa função, vai renderizar essa pagina cliente e vai passar o parametro data, que tem o conjunto de dados que veio do banco    
    })
})
//depois de criar o furmulario, ta criando uma nova rota, chamada post
app.post('/vende/cadastrar', (req, res) => {//pega as informações cadastradas e estão sendo enviadas
   const vende = req.body //estou pegando os dados do formulario 
   try{//vai tentar um possivel erro
    Vende.add(vende)
       conexao.query('SELECT * from vende', function(erro, resultado){ 
        res.render('vende', {data: resultado}) 
       })
   }catch(e){//se deu erro, vai pegar o erro tentando no try, então ele vai fazer um tratamento e mostra qual foi o erro apresentado
       console.log('Error: '+e)
   }
})

app.post('/vende/alterar', (req, res) => {
       const valores = req.body 
       const id = parseInt(req.body.ID)

       console.log(id)
       console.log(valores)
       try{
        Vende.alterar(id, valores, res)
           conexao.query('SELECT * from vende', function(erro, resultado){ 
            res.render('vende', {data: resultado}) 
           })
       }catch(e){
           res.send('Erro: '+e)
       }

})

app.post('/vende/deletar', (req, res)=>{
       const id = parseInt(req.body.id)
       try{
        Vende.delete(id, res)
        conexao.query('SELECT * from vende', function(erro, resultado){ 
         res.render('vende', {data: resultado}) 
        })
       }catch(e){
           console.log('Error: '+e)
       }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/instrumento', function(req,res){/*criando uma rota, quando digitar /cliente vai criar uma requisiçãop e uma resposta*/
    //res.sendFile(__dirname+'/View/cliente.html')/*ir no google chrome e digitar "localhost:3000/cliente", criei o de cliente, é o caminho que quero acessar, fazedr o das outras telas tb*/
    conexao.query('SELECT * from instrumento', function(erro, resultado){ //query é uma função que vai executar no banco de dados, select vai buscar dados na tabeç cliente, pega as informações e armazena na funcao, conexao é o arquivo que faz a conexao com o banco de dados
        res.render('instrumento', {data: resultado}) //quando executa essa função, vai renderizar essa pagina cliente e vai passar o parametro data, que tem o conjunto de dados que veio do banco    
    })
})
//depois de criar o furmulario, ta criando uma nova rota, chamada post
app.post('/instrumento/cadastrar', (req, res) => {//pega as informações cadastradas e estão sendo enviadas
   const instrumento = req.body //estou pegando os dados do formulario 
   try{//vai tentar um possivel erro
    Instrumento.add(instrumento)
       conexao.query('SELECT * from instrumento', function(erro, resultado){ 
        res.render('instrumento', {data: resultado}) 
       })
   }catch(e){//se deu erro, vai pegar o erro tentando no try, então ele vai fazer um tratamento e mostra qual foi o erro apresentado
       console.log('Error: '+e)
   }
})

app.post('/instrumento/alterar', (req, res) => {
       const valores = req.body 
       const id = parseInt(req.body.ID)

       console.log(id)
       console.log(valores)
       try{
        Instrumento.alterar(id, valores, res)
           conexao.query('SELECT * from instrumento', function(erro, resultado){ 
            res.render('instrumento', {data: resultado}) 
           })
       }catch(e){
           res.send('Erro: '+e)
       }

})

app.post('/instrumento/deletar', (req, res)=>{
       const id = parseInt(req.body.id)
       try{
        Instrumento.delete(id, res)
        conexao.query('SELECT * from instrumento', function(erro, resultado){ 
         res.render('instrumento', {data: resultado}) 
        })
       }catch(e){
           console.log('Error: '+e)
       }
})
