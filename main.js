function preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
video.hide();



}

function draw() {
    image(video, 170, 100, 300, 280);
    fill(255, 0,0);
    stroke(255, 0, 0);
    circle (40,40,70);
    fill(255, 0,0);
    stroke(255, 0, 0);
    circle (600,40,70);
    fill(255, 0,0);
    stroke(255, 0, 0);
    circle (600,440,70);
    fill(255, 0,0);
    stroke(255, 0, 0);
    circle (40,440,70);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect (75,25,490,35);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect (75,425,490,35);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect (25,72,35,333);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect (585,72,35,333);
}






function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}