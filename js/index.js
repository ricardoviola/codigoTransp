const trechos = {
    "Porto Alegre - Florianópolis":600,
    "Florianópolis - Curitiba": 300,
    "Maceió - Goiânia": 500,
    "Gooânia - São Paulo": 400
}

function calcularTrecho(trecho, modalidade) {
    const trechoTotalKm = trechos[trecho]
    const modalidadePrecoKm = modalidades[modalidade]
    const custoTotalModalidade= trechoTotalKm * modalidadePrecoKm
    return custoTotalModalidade
}

const produtos = {
    celular:{
        "peso": 0.5,
        "quantidade": 500
    }, 
    Geladeira:{
        "peso": 60,
        "quantidade": 10
    },
    Freezer:{
        "peso": 100,
        "quantidade": 5
    },                
}

function calcularPesoProdutoQuantidade() {
    let pesoProduto 
    let produtoPesoQuantidadeTotal 

    for(const produto of produtos){
       // pesoProduto = produto.peso
        //produtoPesoQuantidadeTotal += pesoProduto * produto.quantidade
        console.log(produto)
    }

    return produtoPesoQuantidadeTotal
}

const modalidades = {
    "Caminhão de pequeno porte": 4.87,
    "Caminhão de médio porte": 11.92,
    "Caminhão de grande porte": 27.44
}

function calcularModalidade(pesoTotal){
    var melhorModalidade = "";
    
    const modalidade1 = "Caminhão de pequeno porte";
    const modalidade2 = "Caminhão de médio porte";
    const modalidade3 = "Caminhão de grande porte";

    if (pesoTotal <= 1000) {
        melhorModalidade = modalidade1;
        
    } else if(pesoTotal > 1000 <= 4000) {
        melhorModalidade = modalidade2;
    
    } else if (pesoTotal > 4000 <= 10000) {
       melhorModalidade = modalidade3
    }
    
    return melhorModalidade;
}

function calcularPesoProdutoQuantidade(quantidade1, quantidade2){
    
    let produto1 = produtos[0];
    let produto2 = produtos[1];
    let pesoProduto1 = pesoProduto[0] * quantidade1;
    let pesoProduto2 = pesoProduto[1] * quantidade2;

    //let pesoTotal = (quantidade1 * produto1) + (quantidade2 * produto2)

    if(produto1  && produto2){
        return pesoProduto1 + pesoProduto2
    }    
}



function enviar(){
    var produto1 = document.getElementById("produto1").value;
    var produto2 = document.getElementById("produto2").value;
       
    var quantidade1 = document.getElementById("quantidade1").value;
    var quantidade2 = document.getElementById("quantidade2").value;

    var pesoTotal = calcularPesoProdutoQuantidade(produto1, quantidade1)
    pesoTotal += calcularPesoProdutoQuantidade(produto2, quantidade2)
    
    
    
    var distancia = trechos[trecho]
    var modalidade = document.getElementById("modalidade").value;
    var melhorModalidade = calcularModalidade(pesoTotal, modalidade)
    var valorTotal = modalidades[melhorModalidade] * distancia; 
    var valorUnitario = valorTotal / distancia;
    


        alert("De " + trecho1 + " e " + trecho2 + "a distância a ser percorrida é de " + distancia +
        " para transporte dos produtos " + produto1 + produto2 + produto3 + produto4 +
        produto5 + " será necessário utilizar " + melhorModalidade + 
        "de forma a resultar no menor custo de transporte por km rodado." +
        "O valor total do transporte dos itens é" + valorTotal + "sendo" + valorUnitario +
        " é o custo unitário médio.")
} 

calcularPesoProdutoQuantidade()


