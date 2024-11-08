import { $ } from "./lib/Pen.js";

export class LaneManager{
    constructor(){
        this.frames = $.makeGroup();

        this.createLane();
        this.createLane();
        this.createLane();
    }

    laneUpdate(){
        this.frames.draw();
    }

    createLane(){
        let frame = $.makeCircleCollider($.w * (0.2 + (this.frames.length * 0.3)), $.h * 0.4, 30);
        frame.fill = "green";
        frame.spots = [
            {x: frame.x, y: frame.y - 75},
            {x: frame.x, y: frame.y + 75},
            {x: frame.x - 75, y: frame.y},
            {x: frame.x + 75, y: frame.y}
        ];
        frame.repairBase = 0.1;
        frame.repairBonus = 0.0;
        frame.pitRepair = frame.repairBase + frame.repairBonus;

        this.frames.push(frame);
    }

    drawLanes(){
        for(let i = 0; i < this.frames.length; i++){
            let frame = this.frames[i];
            frame.pitRepair = frame.repairBase + frame.repairBonus;

            this.drawStaffSpots(frame);
        }
    }

    drawStaffSpots(frame){
        $.colour.fill = "Grey";
        for (let i = 0; i < frame.spots.length; i++){
            let spot = frame.spots[i];
            $.shape.rectangle(spot.x, spot.y, 30, 30);
        }
    }
}