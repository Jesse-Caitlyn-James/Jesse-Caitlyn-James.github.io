import { $ } from "../../lib/Pen.js";
import { TrackManager } from "./trackManager.js";
import { Gamemanager } from "./gameManager.js";

$.use(update);

$.width = 800;
$.height = 800;

let trackManager = new TrackManager();
let gameManager = new Gamemanager();

let carButt = $.makeButton(300, $.h-25, 175, 45, "Carrr");
let laneButton = $.makeButton(100, $.h-25, 175, 45, "Pits");

function update() {
    setBackground();
    trackManager.trackUpdate();
    gameManager.gmUpdate();
    gameManager.repairCheck(trackManager.racers);
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

    $.text.size = 30;
    $.text.font = "Comic Sans MS";
    $.text.print($.w-100, $.h-25, "Coins: " + gameManager.coins, 175);

    if (gameManager.carsInLane > 0){
        laneButton.background = "Red";
        laneButton.label = "Pits: " + gameManager.carsInLane;
    } else {
        laneButton.background = "grey";
        laneButton.label = "Pits";
    }
    
    carButt.draw();
    laneButton.draw();

    if ($.mouse.leftReleased) {
        uiInput();
    }
}

function uiInput(){
    if (laneButton.down) {
        let canvas = document.getElementById("myUICanvas");
        if(canvas.className == "invisible"){
            canvas.classList.remove("invisible");
        }
        else{
            canvas.classList.add("invisible");
        }
    }

    if(carButt.down){
        trackManager.addCar();
    }
}

export function lapFinished(racer){
    gameManager.coins += trackManager.trackArr.length/4;
    gameManager.checkFailure(racer, trackManager.racers);
}

export function getObjects(){
    return [trackManager, gameManager];
}

// Things to do
/**
 * Make code for pitlane - moving "staff" to positions, fixing failures, upgrades
 *      - Also add car upgrading
 * Make Upgrade UI menu
 */