import {lapFinished} from "./lineracer.js";

export class TrackManager {
    constructor() {
        this.trackArr = [];
        this.racers = $.makeGroup();
        this.addCar();
        
        this.trackNodes = $.makeGroup();
        for (let i = 0; i < 4; i++) {
            let node = $.makeCircleCollider($.w / 2, $.h / 2, 10);
            node.static = true;

            switch (i) {
                case 0:
                    node.x -= 50
                    node.y -= 50
                    break;
                case 1:
                    node.x -= 50
                    node.y += 50
                    break;
                case 2:
                    node.x += 50
                    node.y += 50
                    break;
                case 3:
                    node.x += 50
                    node.y -= 50
                    break;
            }
            this.trackArr.push(node.x);
            this.trackArr.push(node.y);
            this.trackNodes.push(node);
        }


        this.addExpansionNodes(this.trackNodes[0]);
        this.addExpansionNodes(this.trackNodes[1]);
        this.addExpansionNodes(this.trackNodes[2]);
        this.addExpansionNodes(this.trackNodes[3]);
        this.trackNodes[0].remove();
        this.trackNodes[1].remove();
        this.trackNodes[2].remove();
        this.trackNodes[3].remove();

        for (let i = 0; i < this.trackNodes.length; i++) {
            this.validPos(this.trackNodes[i].x, this.trackNodes[i].y, this.trackNodes[i]);
        }
    }

    trackUpdate() {
        this.drawTrack();
        this.moveRacer();

        this.trackNodes.draw();

        if ($.mouse.leftReleased) {
            this.addSegement();
        }
    }

    drawTrack() {
        $.colour.fill = "black";
        $.shape.polygon(...this.trackArr);
        $.colour.fill = "green";
        $.shape.rectangle(this.trackArr[0], this.trackArr[1],20,20);
    }

    addTrackNode(node) {
        let x = node.x;
        let y = node.y;
    
        for (let i = 0; i < this.trackArr.length; i += 2) {
            if (this.trackArr[i] == node.rootX && this.trackArr[i + 1] == node.rootY) {
                this.trackArr.splice(i + 2, 0, x);
                this.trackArr.splice(i + 3, 0, y);
            }
        }
    
        this.addExpansionNodes(node);
        node.remove();
    }
    
    addExpansionNodes(oldNode) {
        for (let i = 0; i < 4; i++) {
            let node = $.makeCircleCollider($.w / 2, $.h / 2, 10);
            node.static = true;
            node.rootX = oldNode.x;
            node.rootY = oldNode.y;
            
            let x;
            let y;
            switch (i) {
                case 0:
                    x = oldNode.x - 100;
                    y = oldNode.y;
                    if (this.validPos(x, y, node)) {
                        node.x = x;
                        node.y = y;
                        this.trackNodes.push(node);
                    }
                    break;
                case 1:
                    x = oldNode.x;
                    y = oldNode.y - 100;
                    if (this.validPos(x, y, node)) {
                        node.x = x;
                        node.y = y;
                        this.trackNodes.push(node);
                    }
                    break;
                case 2:
                    x = oldNode.x;
                    y = oldNode.y + 100;
                    if (this.validPos(x, y, node)) {
                        node.x = x;
                        node.y = y;
                        this.trackNodes.push(node);
                    }
                    break;
                case 3:
                    x = oldNode.x + 100;
                    y = oldNode.y;
                    if (this.validPos(x, y, node)) {
                        node.x = x;
                        node.y = y;
                        this.trackNodes.push(node);
                    }
                    break;
                default:
                    node.remove();
            }
        }
    }

    validPos(x, y, expNode) {
        for (let i = 0; i < this.trackArr.length; i += 2) {
            if (this.trackArr[i] == x && this.trackArr[i + 1] == y) {
                expNode.remove();
                return false;
            }
        }
    
        for (let i = 0; i < this.trackNodes.length; i++) {
            if (this.trackNodes[i].x == x && this.trackNodes[i].y == y && expNode.id != this.trackNodes[i].id){
                let node = this.trackNodes[i];
                node.rootX = expNode.rootX;
                node.rootY = expNode.rootY;
    
                expNode.remove();
                return false;
            }
        }
        return true
    }

    getPos(racer) {
        let x = this.trackArr[racer.trackSegment];
        let y = this.trackArr[racer.trackSegment + 1];
        let xDest;
        let yDest;
    
        // Checks it is at the end of the track
        if (racer.trackSegment >= this.trackArr.length - 2) {
            xDest = this.trackArr[0];
            yDest = this.trackArr[1];
        }
        else {
            xDest = this.trackArr[racer.trackSegment + 2];
            yDest = this.trackArr[racer.trackSegment + 3];
        }
    
        let xpos = x + ((xDest - x) * racer.trackDistance);
        let ypos = y + ((yDest - y) * racer.trackDistance);
        return [xpos, ypos];
    }
    
    moveRacer() {
        for(let i = 0; i < this.racers.length; i++){
            let racer = this.racers[i];
            let rpos = this.getPos(racer);

            racer.x = rpos[0];
            racer.y = rpos[1];

            if(!(racer.moveSpeed >= racer.maxSpeed)){
                racer.moveSpeed *= racer.acceleration;
            }
            
            racer.trackDistance += racer.moveSpeed;
            if (racer.trackDistance >= 1.0) {
                if ($.math.random(0, 1) <= racer.speedFlux){
                    racer.moveSpeed *= 0.5;
                }
                racer.trackDistance = 0.0;
                racer.trackSegment += 2;
                if (racer.trackSegment >= this.trackArr.length) {
                    lapFinished(racer);
                    racer.trackSegment = 0;
                }
            }
        }
        
        this.racers.draw();
    }
    
    addSegement() {
        for (let i = 0; i < this.trackNodes.length; i++) {
            let node = this.trackNodes[i];
    
            // Extra space around nodes for clicking
            let margin = 10;
            if ($.mouse.x > node.x1 - margin && $.mouse.x < node.x2 + margin && $.mouse.y > node.y1 - margin && $.mouse.y < node.y2 + margin) {
                this.addTrackNode(node);
            }
        }
    }

    addCar(){
        let car = $.makeCircleCollider(0, 0, 10);
        car.trackDistance = 0;
        car.trackSegment = 0;
        car.moveSpeed = 0.001;
        car.maxSpeed = 0.01;
        car.speedFlux = 0.5;
        car.acceleration = 1.01;
        car.failureChance = 0.3;
        car.repair = 100;
        this.racers.push(car);
    }
}