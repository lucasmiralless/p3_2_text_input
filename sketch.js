var txt=document.getElementById("txt");
function setup() {
  var c = createCanvas(400, 400);
  c.parent("canvasWrapper")
}

function draw() {
  background(220);
  textSize(40); 
  textAlign(CENTER);
  text(txt.value,width/2, height/2);
}
