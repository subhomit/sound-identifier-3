function Compare(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rBwplyAFE/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
    console.log(results);
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;
    document.getElementById("sound-name").innerHTML = "I can hear - " + results[0].label;
    document.getElementById("confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2)+"%";
    document.getElementById("sound-name").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img1 = document.getElementById("cat.jpg");
    img2 = document.getElementById("cow.png");
    img3 = document.getElementById("dog.jpg");
    img4 = document.getElementById("lion.png");
    if(results[0].label == "Cat"){
       img1
    }
    else if(results[0].label == "Cow"){
        img2
    }
    else if(results[0].label == "Dog"){
        img3
    }
    else{
        img4
    }
    }
}
