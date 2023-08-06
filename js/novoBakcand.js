const produtos = {
    
}

function calcularPesoProdutoQuantidade() {
    let produtoPesoQuantidadeTotal = 0
  
      for(const produto of Object.keys(produtos)){
          const peso = produtos[produto].peso
          const quantidade = produtos[produto].quantidade     
          produtoPesoQuantidadeTotal += peso * quantidade
          console.log(peso)
          console.log(quantidade)
      }
  
    return produtoPesoQuantidadeTotal
  }
console.log(calcularPesoProdutoQuantidade())