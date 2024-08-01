var nome = document.getElementById("nome");
var email= document.querySelector('#email');
// querySelector pega quanto id e name de uma tag mas tem que ser especificado !!!!!!
var Botao = document.querySelector("#botao");
var endereco = document.querySelector("#endereco");
var data_nasc = document.querySelector("#data")
var cor = document.querySelector("#cor");
var titulo= document.querySelector("#titulo")


cor.addEventListener('change',function(){// change = ele espera vc escolher para depois mudar 
   // alert(cor.value);
    document.body.style.backgroundColor = cor.value;
    document.body.style.color = "White"
    
})

Botao.addEventListener('click',function(e){
    e.preventDefault();//Mantém os dados escritos 

    alert("Bem vindo " + nome.value + "\n Data de nascimento: " + data_nasc.value +  "\n Endereço: " + endereco.value,);
})
window.onload= function(){
    var corFav= prompt("qual a sua cor favorita? ");
    var pX= prompt("Digite o valor da posição x:");
    var pY= prompt("Digite o valor da posição Y:");
    
    var alvo= document.querySelector('#alvo');
    //move a bolinha para a direita
    alvo.style.marginLeft = pX + "vw";
    // move a bolinha para baixo 
    alvo.style.marginTop = pY + "vh";
    alvo.style.backgroundColor = corFav;
}


   




