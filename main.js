noseX=0;
noseY=0;
leftwrist_x=0;
rightwrist_x=0;
diffrence=0;

function setup(){
    canvas=createCanvas(360,360);
    canvas.position(550,150);
    video=createCapture(VIDEO);
    video.size(360,360);

    
    posenet=ml5.poseNet(video,ModelLoaded);
    posenet.on("pose",Gotposes);
}
function ModelLoaded(){
    console.log("Model Loaded!");
}


function Gotposes(results){
if (results.length>0){

    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftwrist_x=results[0].pose.leftWrist.x;
    rightwrist_x=results[0].pose.rightWrist.x;
    diffrence=floor(leftwrist_x-rightwrist_x);
    console.log(diffrence);
}   
}
function draw(){
   background("#C0C0C0");
    document.getElementById("square_side").innerHTML="Width And Height of a square will be ="+diffrence+"px";
    fill('#ffb3b3');
    stroke('#660000');
    square(noseX,noseY,diffrence);
}