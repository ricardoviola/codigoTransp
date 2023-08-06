const produtos = {
    celular:{
        peso: 0.5,
        quantidade: 500
    }, 
    Geladeira:{
        peso: 60,
        quantidade: 10
    },
    Freezer:{
        peso: 100,
        quantidade: 5
    }                
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