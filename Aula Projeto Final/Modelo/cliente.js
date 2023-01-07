//classe que vai espelhar a estrutura da tabela, que tem relação com o banco de dados
const conexao = require('../conexao')

class Cliente {
    add(cliente){//função chamada add, que vai receber por parametro o objeto/estrutura do cliente, com todas as informações dele e mandarei pro metodo adicionar
        const sql = 'INSERT INTO cliente SET ?'//insert é para adiconar uma função nova, a ? significa que espera um parametro
        conexao.query(sql, cliente, (erro, resultado)=>{//executei o sql, e to usando a função erro e resultado, e ta passando o cliente como parametroS
             if(erro){
                 console.log(erro)
             }else{
                 console.log(resultado)//função de adicionar acabou de ficar pronta
             }
        })
        }
    delete(id, res){
        const sql = 'DELETE FROM cliente where id=?'//delete da tabela cliente onde o id recebe um parametro
        conexao.query(sql, id, (erro, resultado)=>{
             if(erro){
                 res.status(400).json(erro)
             }
        })
    }  
    
    alterar(id, valores, res){//vai receber o id, valores (nome, endereco, cpf, telefone,) e o res, que é a resposta pro servidor
        const sql = 'UPDATE cliente SET ? WHERE id = ?'
        conexao.query(sql, [valores, id], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }
        })
    }

}

module.exports = new Cliente //esse module.exports é para instanciar uma classe em outro lugar

