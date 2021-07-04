const express = require('express');


const roteador = express();

//produto
roteador.get('/produtos', ()=>{});

//carrinho

roteador.get('/carrinho', ()=>{});
roteador.post('/carrinho/produtos', ()=>{});
roteador.patch('/carrinho/produtos/:id', ()=>{});
roteador.delete('/carrinho/produtos/:id', ()=>{});
roteador.delete('/carrinho', ()=>{});
roteador.post('/finalizar-compra', ()=>{});


module.exports = roteador;
