const fs = require("fs");

const fsp = fs.promises;
const ARQUIVO = 'src/banco/data.json';



async function lerArquivo(){

    try {
        const arquivo =  await fsp.readFile(ARQUIVO, (err, data)=>{
            if (err){
                return err;
            }
            return data;
        })

        if (arquivo.length > 0){
            return JSON.parse(arquivo);
        }
        
    } catch (error) {
        return false;
        
    }
  


}





module.exports= {lerArquivo}