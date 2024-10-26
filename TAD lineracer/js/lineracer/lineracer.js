import { $ } from "../../lib/Pen.js";

$.use(update);

$.width = 1000;
$.height = 1000;

// polygon coords
// let trackArr = [[10,10],[10,15],[15,15],[20,15],[20,20]];
let trackArr = [400,400,400,600,600,600,600,400];
let trackSegment = 0;
let trackDistance = 0;

function update() {
    setBackground();
    drawTrack();
    drawRacer();
}

function setBackground(){
    const oldColour = $.colour.fill;
    $.colour.fill = "grey";
    $.shape.rectangle(500,500,1000,1000);
    $.colour.fill = oldColour;
}

function drawTrack(){
    $.colour.fill = "black";
    let track = $.shape.polygon(...trackArr);
}

function drawRacer(){
    $.colour.fill = "red";
    let rpos = getPos();
    let racer = $.shape.oval(rpos[0],rpos[1],5,5);

    moveRacer();
}

function getPos(){
    let x = trackArr[trackSegment];
    let y = trackArr[trackSegment + 1];
    let xDest;
    let yDest;

    // Checks it is at the end of the track
    if(trackSegment >= trackArr.length - 2){
        xDest = trackArr[0];
        yDest = trackArr[1];
    }
    else{
        xDest = trackArr[trackSegment + 2];
        yDest = trackArr[trackSegment + 3];
    }

    let xpos = x + ((xDest - x) * trackDistance);
    let ypos = y + ((yDest - y) * trackDistance);
    return [xpos, ypos];
}

function moveRacer(){
    trackDistance += 0.01;

    if (trackDistance >= 1.0){
        trackDistance = 0.0;
        trackSegment += 2;
        if (trackSegment >= trackArr.length){
            trackSegment = 0;
        }
    }
}