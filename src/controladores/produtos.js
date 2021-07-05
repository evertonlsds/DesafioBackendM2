const { lerArquivo } = require('../utilitarios/db');



async function listarProdrutos( req, res){
    const arquivo = await lerArquivo();



    console.log(arquivo);

    

}







module.exports = { listarProdrutos }