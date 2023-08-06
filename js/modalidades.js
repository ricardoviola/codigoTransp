const produtos = ["celular", "Geladeira"];
const pesoProduto = [0.5, 60];



//console.log(calcularPesoProdutoQuantidade())

function calcularPesoProdutoQuantidadeTotal(produto1, produto2, quantidade1, quantidade2){

    let pesoProduto1 = produto1
    produto1 = pesoProduto[0] * quantidade1

    let pesoProduto2 = produto2;
    produto2 = pesoProduto[1] * quantidade2
    
    pesoTotal =  produto1 + produto2
        
    return pesoTotal
        
}

const modalidades = ["Caminhão de pequeno porte", "Caminhão de médio porte", "Caminhão de grande porte"];
const valorModalidade = [4.87, 11.92, 27.44]

const modalidade1 = modalidades[0];
const modalidade2 = modalidades[1];
const modalidade3 = modalidades[2]; 


function buscaMelhorModalidade(pesoTotal){
    
    if (pesoTotal <= 1000) {
        melhorModalidade = "Caminhão de pequeno porte";        
     } else if(pesoTotal > 1000 && pesoTotal <= 4000) {
         melhorModalidade = "Caminhão de médio porte";   
     } else if (pesoTotal > 4000 && pesoTotal <= 10000) {
         melhorModalidade = "Caminhão de grande porte"
     }else{
         melhorModalidade = 0;
     }
 
     return melhorModalidade;  
 }
