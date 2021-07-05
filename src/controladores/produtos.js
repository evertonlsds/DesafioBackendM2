const { lerArquivo } = require('../utilitarios/db');



async function listarProdrutos( req, res){
    let {produtos} = await lerArquivo();
    const { categoria, precoInicial, precoFinal } = req.query;



    if(!produtos){
        return res.status(200).json([])
    }

     produtos = produtos.filter(prod => prod.estoque > 0);

    if(categoria){
        produtos = produtos.filter(prod => prod.categoria.toLowerCase() === categoria.toLowerCase());
    }

    if(precoInicial){
        produtos = produtos.filter(prod => prod.preco >= precoInicial);
    }
    if(precoFinal){
        produtos = produtos.filter(prod => prod.preco <= precoFinal);
    }

    return res.status(200).json(produtos);
   
}







module.exports = { listarProdrutos }