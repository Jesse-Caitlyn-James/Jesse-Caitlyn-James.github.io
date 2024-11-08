import { $ } from "./lib/Pen.js";
import { getObjects } from "../lineracer.js";
import { LaneManager } from "./laneManager.js";

$.use(update);

$.width = 800;
$.height = 400;

let toolbar = { x: $.w / 2, y: $.h - 25 }

let toolGroup = $.makeGroup();
let toolsOnBar = $.makeGroup();
let selectedTool = null;

let laneManager = new LaneManager();
let trackManager = getObjects()[0];
let gameManager = getObjects()[1];

laneManager.laneGroup = gameManager.laneGroup;

addTool();
addTool();

function update() {
    setBackground();
    drawToolbar();
    laneManager.laneUpdate();
    updateLaneGroup();

    $.drawColliders();

    if ($.mouse.leftDown) {
        pickupTool();
    }
    else if (selectedTool) {
        selectedTool.inFrame = false;
        for (let i = 0; i < laneManager.frames.length; i++) {
            let frame = laneManager.frames[i];
            for (let j = 0; j < frame.spots.length; j++){
                let spot = frame.spots[j];
                if (spot.x > selectedTool.x1 && spot.x < selectedTool.x2 && spot.y > selectedTool.y1 && spot.y < selectedTool.y2) {
                    selectedTool.homeX = spot.x;
                    selectedTool.homeY = spot.y;
                    selectedTool.x = selectedTool.homeX;
                    selectedTool.y = selectedTool.homeY;
                    selectedTool.onToolBar = false;
                    selectedTool.inFrame = true;
                }
                else {
                    if (selectedTool.onToolBar){
                        selectedTool.x = selectedTool.homeX;
                        selectedTool.y = selectedTool.homeY;
                    }
                }
            }
        }
        // Doews something sketchy  - toolsOnbar[] is bugged
        // It seems somewhere it isn't removed/added to the toolbar
        if(!selectedTool.onToolBar && !selectedTool.inFrame){
            selectedTool.x = toolsOnBar.length * 30 + 20;
            selectedTool.y = toolbar.y;
            selectedTool.homeX = selectedTool.x;
            selectedTool.homeY = selectedTool.y;
            selectedTool.onToolBar = true;
            selectedTool.inFrame = false;
            toolsOnBar.push(selectedTool);
        }

        selectedTool = null;
    }
}

function setBackground() {
    const oldColour = $.colour.fill;
    $.colour.fill = "#EAEAEA";
    $.shape.rectangle(500, 500, 1000, 1000);
    $.colour.fill = oldColour;
}

function drawToolbar() {
    $.colour.fill = "#D2B48C";
    $.shape.rectangle(toolbar.x, toolbar.y, $.w, 50);

    laneManager.drawLanes();
}

function addTool() {
    let tool = $.makeBoxCollider(toolsOnBar.length * 30 + 20, toolbar.y, 25, 25);
    tool.homeX = tool.x;
    tool.homeY = tool.y;
    tool.static = true;
    tool.onToolBar = true;
    tool.inFrame = false;
    toolGroup.push(tool);
    toolsOnBar.push(tool);
}

function pickupTool() {
    if (!selectedTool) {
        for (let i = 0; i < toolGroup.length; i++) {
            if ($.mouse.x > toolGroup[i].x1 && $.mouse.x < toolGroup[i].x2 && $.mouse.y > toolGroup[i].y1 && $.mouse.y < toolGroup[i].y2) {
                if(toolGroup[i].onToolBar){
                    toolGroup[i].onToolBar = false;
                    toolsOnBar = toolsOnBar.splice(i, 1);
                }
                selectedTool = toolGroup[i];
            }
        }
    }
    else {
        selectedTool.x = $.mouse.x;
        selectedTool.y = $.mouse.y;
    }
}

function updateLaneGroup(){
    laneManager.laneGroup = gameManager.laneGroup;
    for(let i = 0; i < laneManager.laneGroup.length; i++){
        let racer = laneManager.laneGroup[i];
        if(racer.pitLane == null){
            for(let j = 0; j < laneManager.frames.length; j++){
                let frame = laneManager.frames[j];
                if(frame.pitRacer == null && racer.pitLane == null && racer.repair < 100){
                    frame.pitRacer = racer;
                    racer.pitLane = j;
                    frame.fill = "red";
                }
            }
        } else {
            let pitRepair = laneManager.frames[racer.pitLane].pitRepair;
            racer.repair += pitRepair;

            if(racer.repair >= 100){
                laneManager.frames[racer.pitLane].fill = "green";
                laneManager.frames[racer.pitLane].pitRacer = null;
                racer.pitLane = null;
            }
            console.log(racer.repair);
        }
    }

    gameManager.laneGroup = laneManager.laneGroup;
}