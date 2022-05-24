function redesignContent(){
	var video = document.getElementById("backgroundVideo");
	var height = video.clientHeight;
	var content = document.getElementById("contenido");
	content.style.marginTop = height+"px";
}

window.onresize = function(event) {
   	redesignContent();
};
