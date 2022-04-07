// Algoritmo de RETO 1
function operacion1(){
    let G=document.getElementById("L").value;
    let PG=document.getElementById("PG").value;
    let TG=G/3.785;
    let GA=PG*TG;
    document.getElementById("GA").innerHTML=GA.toFixed(2);
}

// Algoritmo de RETO 2
function operacion2(){
    let TI=document.getElementById("TI").value;
    let N=document.getElementById("N").value;
    let TP=document.getElementById("TP").value;
    let PA;
    switch(TI){
        case "sencilla":
            PA=20;
            break;
        case "doble":
            PA=25;
            break;
        case "triple":
            PA=28;
            break;
        default:
            PA:0;
    }
    let CA;
    switch(TP){
        case "contado":
            CA=1;
            break;
        case "tarjeta de credito":
            CA=1.05;
            break;
    }
                                                
    let TO=N*PA;
    let TOT=N*PA*CA;
    let TT=TOT;
    document.getElementById("TT").innerHTML=TT.toFixed(2);
}

// Algoritmo de RETO 3
    //Valores Globales
    var cantToner=0;
    var cantCabezal=0;
    var cantTinta=0;

function operacion3(){
    var N=+document.getElementById("N.").value;
    var seleccion=+document.getElementById("select1").value;
    switch(seleccion){
        case 1:
            cantToner+=N;
            break;
        case 2:
            cantCabezal+=N;
            break;
        case 3:
            cantTinta+=N;
            break;
        default:
    }
    document.getElementById("cantToner").innerHTML=cantToner;
    document.getElementById("cantCabezal").innerHTML=cantCabezal;
    document.getElementById("cantTinta").innerHTML=cantTinta;
}