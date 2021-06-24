prediction1="";
prediction2="";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
Webcam.snap(function(a){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+a+'"/>';
});
}
console.log("hy i am ml5 enloaded",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bIhIT6pak/model.json',modelloaded);
function modelloaded(){
console.log("i have loaded");
}
function speak(){
var y=window.speechSynthesis;
firstprediction1="the first prediction is"+prediction1;
secondprediction2="and the second prediction is"+prediction2;
var z=new SpeechSynthesisUtterance(firstprediction1+secondprediction2);
y.speak(z);
}
function ab(){
    img=document.getElementById("captured_image");
    x.classify(img,gotresult);
    }
    function gotresult(error,result){
    if(error){
    console.log(error);
    }
    else{
    console.log(result);
    document.getElementById("result_emotion_name").innerHTML=result[0].label;
    document.getElementById("result_emotion_name2").innerHTML=result[1].label;
    prediction1=result[0].label;
    prediction2=result[1].label;
    speak();
    if(result[0].label == "good"){
    document.getElementById("c").innerHTML="&#128076;";
    }
    if(result[0].label == "thumsp up"){
        document.getElementById("c").innerHTML="&#128077;";  
     }
     if(result[0].label == "raise hand"){
        document.getElementById("c").innerHTML="&#9995;";
        }
        if(result[1].label == "good"){
            document.getElementById("d").innerHTML="&#128076;";
            }
            if(result[1].label == "thumsp up"){
                document.getElementById("d").innerHTML="&#128077;";  
             }
             if(result[1].label == "raise hand"){
                document.getElementById("d").innerHTML="&#9995;";
                }
                
    }}
    