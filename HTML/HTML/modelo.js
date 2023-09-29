function calcular(){
    numero1 = parseInt(document.getElementById('num1').value);
    numero2 = parseInt(document.getElementById('num2').value);
    total = numero1 + numero2;
    
    document.getElementById('demo').innerHTML = total;
}

function cubo(){
    num3 = parseInt(document.getElementById('num3').value);
    total2 = num3 * num3 * num3;
    document.getElementById('cubo').innerHTML = total2;
}
function graus(){
    num4 = parseFloat(document.getElementById('num4').value);
    total3 = (num4 - 32)* 5/9;
    document.getElementById('graus').innerHTML = total3;
}
function Area(){
    num6 = parseFloat(document.getElementById('num6').value);
    num5 = parseFloat(document.getElementById('num5').value);
    total4 = (num5 * num6)/2
    document.getElementById('area').innerHTML = total4;
}
//Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.
function circulo() {
    num7 = parseFloat(document.getElementById('nume7').value);
    total5 = 3.14* (num7 * num7);
    total6 = 2*3.14*num7;
    document.getElementById('circulo1').innerHTML = total5;
    document.getElementById('circulo2').innerHTML = total6;
}
function palavras(){
    palavras = document.getElementById("palavra").value;
    totalLetras= palavras.length;
    document.getElementById("palavras1").innerHTML = totalLetras;
}