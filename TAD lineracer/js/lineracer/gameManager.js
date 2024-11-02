import "./pitlane/pitlane.js";
import "./lineracer.js";

export class Gamemanager {
    constructor() {
        this.carsInLane = 0;
        this.coins = 0;
        this.laneGroup = $.makeGroup();
    }
    
    gmUpdate(){ 
        this.carsInLane = this.laneGroup.length;
    }

    checkFailure(racer, racers){
        if ($.math.random(0, 1) < racer.failureChance){
            let index = racers.indexOf(racer);
            racers.splice(index, 1);
            this.laneGroup.push(racer);
        }
    }
}