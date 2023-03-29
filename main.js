https://teachablemachine.withgoogle.com/models/3IUUnufqL/
function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3IUUnufqL/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}