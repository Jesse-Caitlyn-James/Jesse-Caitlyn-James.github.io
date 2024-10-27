import { $ } from "../../lib/Pen.js";
import { TrackManager } from "./trackManager.js";

$.use(update);

$.width = 1000;
$.height = 1000;

let trackManager = new TrackManager();

function update() {
    setBackground();
    trackManager.trackUpdate();
    updateUI();
}

function setBackground() {
    const oldColour = $.colour.fill;
    $.colour.fill = "grey";
    $.shape.rectangle(500, 500, 1000, 1000);
    $.colour.fill = oldColour;
}

// UI bar here
function updateUI(){
    $.colour.fill = "lightblue";
    $.shape.rectangle($.w/2, $.h-25, $.w, 50);

    $.colour.fill = "#454545";
    $.shape.rectangle(100, $.h-25, 175, 45);

    if ($.mouse.leftReleased) {
        uiInput();
    }
}

function uiInput(){
    let x1 = 100 - 175/2;
    let x2 = 100 + 175/2;
    let y1 = $.h-25 - 45/2;
    let y2 = $.h-25 + 45/2;

    if ($.mouse.x > x1 && $.mouse.x < x2 && $.mouse.y > y1 && $.mouse.y < y2) {
        let canvas = document.getElementById("myUICanvas");
        if(canvas.className == "invisible"){
            canvas.classList.remove("invisible");
        }
        else{
            canvas.classList.add("invisible");
        }
    }
}

// Things to do
/**
 * Make class for cars
 * Make class for game manager - coins/rate of failure/etc
 * Make code for pitlane - moving "staff" to positions, fixing failures, upgrades
 */