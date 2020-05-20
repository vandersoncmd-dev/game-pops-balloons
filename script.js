var cont = 0 ;
function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");
    var cor = Math.floor(Math.random()*899)+100;
    var p1 = Math.floor(Math.random() * 320);
    var p2 = Math.floor(Math.random() * 600);
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:#"+cor+";");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola); 
}
function estourar(elemento) {
	cont = cont + 1;
	var audio = document.querySelector('audio');
	audio.play();
	document.getElementById('pts').innerHTML = cont;
    document.body.removeChild(elemento);
	if(cont == 10){
		window.location.href="#";
	}
	

}
function iniciar(){
    setInterval(addBola, 500);
}
