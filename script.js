var mouseX = 0, mouseY = 0;
var bgX = 0, bgY = 0;
document.addEventListener("mousemove", function(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
});
setInterval(function(){
    bgX += (mouseX - bgX) / 10;
    bgY += (mouseY - bgY) / 10;
    var xPos = -bgX / 20 + "px";
    var yPos = -bgY / 20 + "px";
    document.querySelector("body").style.backgroundPosition = xPos + " " + yPos;
}, 30);
