import { $ } from "./lib/Pen.js";

$.use(update);

$.width = 1000;
$.height = 400;

function update() {
    setBackground();
    drawFrames();
}

function setBackground() {
    const oldColour = $.colour.fill;
    $.colour.fill = "#EAEAEA";
    $.shape.rectangle(500, 500, 1000, 1000);
    $.colour.fill = oldColour;
}

function drawFrames(){
    // Make the other game shaped thing in here
}