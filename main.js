function setup() {
    video = createCapture(VIDEO)
    video.parent("webcam")
    video.size(550, 500);
    //  video.position(130,150);

    canvas = createCanvas(550, 310)
    canvas.parent("canvas")
    // canvas.position(691,245)

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses)
}

function modelLoded() {
    console.log('Posing is done!')
}


noseX = 0;
noseY = 0;
difference = 0;
leftWristX =0;
rightWristX =0;

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("X = "+noseX+"Y = "+noseY)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose. rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("liftwrist x = "+ leftWristX+"rightx"+rightWristX+"diffrence"+difference);
    }

}

function draw() {
    background('#03001c');
    fill('#040480');
    stroke('#0c0cc7')
    textSize(difference-100)
    text("Hi, My Name I Pradyumna", noseX-350, noseY-50);
    document.getElementById("a").innerHTML = "size of font is "+difference+"px";
}
