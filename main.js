function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pN4JPl3VA/model.json", ModelLoaded);
}

function ModelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    image(video, 0, 0, 350, 350);
    classifier.classify(video, gotResult);  
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}