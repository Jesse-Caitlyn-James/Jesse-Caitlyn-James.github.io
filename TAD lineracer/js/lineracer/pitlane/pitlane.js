import { $ } from "./lib/Pen.js";

$.use(update);

$.width = 1000;
$.height = 400;

let toolbar = { x: $.w / 2, y: $.h - 25 }
let frame1 = { x: $.w * 0.2, y: $.h * 0.4 };
let frame2 = { x: $.w * 0.5, y: $.h * 0.4 };
let frame3 = { x: $.w * 0.8, y: $.h * 0.4 };
let frames = [frame1, frame2, frame3];

let toolGroup = $.makeGroup();
let toolsOnBar = $.makeGroup();
let selectedTool = null;

addTool();
addTool();

function update() {
    setBackground();
    drawFrames();
    $.drawColliders();

    if ($.mouse.leftDown) {
        pickupTool();
    }
    else if (selectedTool) {
        selectedTool.inFrame = false;
        for (let i = 0; i < frames.length; i++) {
            if (frames[i].x > selectedTool.x1 && frames[i].x < selectedTool.x2 && frames[i].y > selectedTool.y1 && frames[i].y < selectedTool.y2) {
                selectedTool.homeX = frames[i].x;
                selectedTool.homeY = frames[i].y;
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

function drawFrames() {
    $.colour.fill = "#D2B48C";
    $.shape.rectangle(toolbar.x, toolbar.y, $.w, 50);

    $.colour.fill = "blue";
    $.shape.rectangle(frame1.x, frame1.y, 10, 10);
    $.shape.rectangle(frame2.x, frame2.y, 10, 10);
    $.shape.rectangle(frame3.x, frame3.y, 10, 10);

    // Make the other game shaped thing in here
}

function addTool() {
    let tool = $.makeBoxCollider(toolsOnBar.length * 30 + 20, toolbar.y, 25, 25);
    tool.homeX = tool.x;
    tool.homeY = tool.y;
    tool.static = true;
    toolGroup.push(tool);
    toolsOnBar.push(tool);
}

function pickupTool() {
    if (!selectedTool) {
        for (let i = 0; i < toolGroup.length; i++) {
            if ($.mouse.x > toolGroup[i].x1 && $.mouse.x < toolGroup[i].x2 && $.mouse.y > toolGroup[i].y1 && $.mouse.y < toolGroup[i].y2) {
                toolsOnBar = toolsOnBar.splice(i, 1);
                selectedTool = toolGroup[i];
            }
        }
    }
    else {
        selectedTool.x = $.mouse.x;
        selectedTool.y = $.mouse.y;
    }
}