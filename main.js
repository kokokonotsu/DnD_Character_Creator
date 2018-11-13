var numArray = ["Candy", "Apricots", "Spinach"];

console.log(numArray.map(newArray => newArray.length));

function clock(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    //Restate the radius
    radius = radius * 0.9;
    drawClock();
    function drawClock(){
        ctx.arc(0, 0, radius, 0 , Math.PI * 2);
        ctx.fillStyle= "white";
        ctx.fill();
    }
}
window.addEventListener("load", clock);