status = "";
img = "";

function preload() {
    img = loadImage("ac.png");
}

function setup() {
    canvas = createCanvas(1400, 1000);
    canvas.center();
    objectDecter = ml5.objectDecter('cococssd', modelLoded);
    document.getElementById("status").innerHTML = "Status = detecting ojbjects";
}

function draw() {
    image(img, 0, 0, 1400, 1000)
}

function modelLoded() {
    console.log("model Loaded Successfully");
    status = true;
    objectDecter.detect(img1, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error();
    }
    console.log(results);
}