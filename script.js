var cont = 0 ;
function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");
    var cor = Math.floor(Math.random()*899)+100;
    var p1 = Math.floor(Math.random() * 1500);
    var p2 = Math.floor(Math.random() * 780);
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:#"+cor+";");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola); 
    cont = cont + 1;
    console.log(cont);
}
function estourar(elemento) {
    document.body.removeChild(elemento);

}
function iniciar(){
    setInterval(addBola, 500);
}
