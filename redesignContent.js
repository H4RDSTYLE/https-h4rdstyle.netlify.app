function redesignContent(){
	var video = document.getElementById("backgroundVideo");
	var height = video.clientHeight;
	var content = document.getElementById("contenido");
	content.style.marginTop = height+"px";
}

function smoothScroll(id){
	var element = document.querySelector(id);
	element.scrollIntoView({ behavior: 'smooth'});
}

window.onresize = function(event) {
   	redesignContent();
};


window.onbeforeunload = function () {
    window.scrollTo(0,0);
};