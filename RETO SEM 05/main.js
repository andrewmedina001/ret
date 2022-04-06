function operacion1(){
    let G=document.getElementById("L").value;
    let PG=document.getElementById("PG").value;
    let TG=G/3.785;
    let GA=PG*TG;
    document.getElementById("GA").innerHTML=GA.toFixed(2);
}
function operacion2(){
    let TI=document.getElementById("TI").value;
    let N=document.getElementById("N").value;
    let TP=document.getElementById("TP").value;
    let PA;
    switch(TI){
        case "sencilla":
            PA=20;
        case "doble":
            PA=25;
        case "triple":
            PA=28;
    }
    let CA;
    switch(TP){
        case "Efectivo":
            CA=1;
        case "tarjeta de crédito":
            CA=1.05;
    }
    let TO=N*PA;
    let TOT=N*PA*CA;
}