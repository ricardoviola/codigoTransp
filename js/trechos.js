
const origemDestino = ['Porto Alegre', 'Florianópolis','Curitiba'];
const distanciaTotal = [500, 300, 900];

function trechoTotal(trecho1, trecho2){

    if(trecho1 == origemDestino[0] && trecho2 == origemDestino[1]){
        distancia = distanciaTotal[0]
    }
    else if(trecho1 == origemDestino[1] && trecho2 == origemDestino[2]){
        distancia = distanciaTotal[1]

    }else if(trecho1 == origemDestino[0] && trecho2 == origemDestino[2]) {
        distancia = distanciaTotal[2]
    }else{
        distancia = 0;
    }

    return distancia
}



function calculaPreçoTotal(melhorModalidade, preçoTotal){

    const modalidade1 = modalidades[0];
    const modalidade2 = modalidades[1];
    const modalidade3 = modalidades[2]; 
    
    if(melhorModalidade == modalidade1){
        preçoTotal = distancia * 4.87
    }else if(melhorModalidade == modalidade2){
        preçoTotal = distancia * 11.92
    }else if(melhorModalidade == modalidade3){
        preçoTotal = distancia * 27.44
    }else{
        preçoTotal = 0;
    }

    return preçoTotal
    
}



function enviar(){
    let trecho1 = document.getElementById("trecho1").value;
    let trecho2 = document.getElementById("trecho2").value;
    
    let produto1 = document.getElementById("produto1").value;
    let produto2 = document.getElementById("produto2").value;   
    let quantidade1 = document.getElementById("quantidade1").value;
    let quantidade2 = document.getElementById("quantidade2").value;   
    
    let distancia = trechoTotal(trecho1, trecho2);  
    let pesoTotal = calcularPesoProdutoQuantidadeTotal(produto1, produto2, quantidade1, quantidade2);
    let melhorModalidade =  buscaMelhorModalidade(pesoTotal);     
    let preçoTotal = calculaPreçoTotal(melhorModalidade, distancia);
    
    alert(`De ${trecho1} a ${trecho2} a distância percorrida é ${distancia} kms. O peso total da carga é ${pesoTotal} kg e o transporte recomendado é um ${melhorModalidade}. O valor total para transporte é ${preçoTotal} reais.`)
}
