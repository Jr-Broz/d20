var valorAleatorio = cidadeValores[Math.floor(cidadeValores.length * Math.random())];

// console.log("O valor aleatório escolhido foi: " +valorAleatorio);


function dado(){
let d20 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];

var DadovalorAleatorio = d20[Math.floor(d20.length * Math.random())];

  document.getElementById("dado").innerHTML = DadovalorAleatorio;
  

  

}
