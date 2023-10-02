const names = [];
const weigths = [];
const heigths = [];
const imcs = [];
let peopleNum = prompt("Quantas pessoas?");
let i;
let statusIndividual = [];

function getStuff(){
    for (i = 0; i < peopleNum; i++){
        names[i] = prompt("Insira o nome da " + (i + 1) + "° pessoa");
        weigths[i] = prompt("Insira o peso da " + (i + 1) + "° pessoa");
        heigths[i] = prompt("Insira a altura da " + (i + 1) + "° pessoa");
    }
}

getStuff();

function calculateNums(){
    for (i = 0; i < peopleNum; i++){
        imcs[i] = (weigths[i] / (heigths[i] * heigths[i])).toPrecision(4);
    }
}

function verifyStatus(){
    if (imcs[i] > 18.5){
        if(imcs[i] > 24.99){
            if(imcs[i] > 29.99){
                return statusIndividual[i] = "Obesidade";
            } else {
                return statusIndividual[i] = "Sobrepeso";
            }
        } else {
            return statusIndividual[i] = "Normal";
        }
    } else {
        return statusIndividual[i] = "Abaixo do peso";
    }    
}

calculateNums();

function outputPerf(){
    for (i = 0; i < peopleNum; i++){
        document.write("<p id=\"p" + i + "\"></p>");
        document.getElementById("p" + i).innerHTML = ("<br>" + "Nome: " + names[i] + "<br>" + "Peso: " + weigths[i] + "kg" + "<br>" + "Altura: " + heigths[i] + "m" + "<br>" + "Índice de Massa Corporal: " + imcs[i] + "<br>" + "Status: " + verifyStatus());      
    }
}

outputPerf();