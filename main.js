Status = "";
Object_name = "";

function Start() {
    Object_name = document.getElementById('Name_Input').value;
    if (Object_name == "") {
        window.alert("Kindly enter the object name in the field below")
    } else {
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status: Detecting Objects";
    }
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380)
    video.hide();
}

function modelLoaded() {
    console.log('Model Loaded')
    Status = true;
}

function draw(){
    image(video, 0, 0, 380, 380);
}