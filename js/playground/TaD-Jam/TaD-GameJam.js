import { $ } from "../../../lib/Pen.js";
$.use(update);
// $.debug = true;

// Asset Pile
let assets = {
    player: $.loadImageToStamp(0, -1000, "../images/bar.png"),
    bricks: [
        $.loadImageToStamp(0, -1000, "../images/brick1.png"),
        $.loadImageToStamp(0, -1000, "../images/brick2.png"),
        $.loadImageToStamp(0, -1000, "../images/brick3.png"),
        $.loadImageToStamp(0, -1000, "../images/brick4.png"),
    ],
    ball: $.loadImageToStamp(0, -1000, "../images/ball.png"),
    wall: $.loadImageToStamp(0, -1000, "../images/wall.png"),
    shop: $.loadImageToStamp(0, -1000, "../images/shop.png"),
    shopFrame: $.loadImageToStamp(0, -1000, "../images/shopFrame.png"),
    shopClose: $.loadImageToStamp(0, -1000, "../images/shopClose.png"),
    shopChicken: $.loadImageToStamp(0, -1000, "../images/shopChicken.png"),
    chicken: $.loadImageToStamp(0, -1000, "../images/chicken.png")
};


$.canvas.width = 1600;
$.canvas.height = 1200;

let bricks = $.makeGroup();
let walls = $.makeGroup();
let subProjectiles = $.makeGroup();

class Game {
    constructor() {
        this.score = 0;
        this.cash = 0;
        this.chickens = $.makeGroup();
    }
    
    createUI() {
        $.text.size = 30;
        $.colour.fill = "white";
        this.cashUI = $.text.print(75, 1175, "Cash: " + this.cash);
        this.scoreUI = $.text.print($.w / 2, 1175, "Score: " + this.score);
    }

    addChicken(){
        let chicken = $.makeBoxCollider($.w/2, 1120, 50, 50);
        chicken.asset = assets.chicken;
        this.chickens.push(chicken);
    }
}

class Shop {
    constructor(){
        this.shopGroup = $.makeGroup();
    }

    generateShop(){
        shopGenerated = true;
        this.shopFrame = $.makeBoxCollider($.w/2, $.h/2, $.w/2, $.h*0.75);
        this.shopClose = $.makeBoxCollider(1150, 200, 50, 50);
        this.shopChicken = $.makeBoxCollider(800, 550, 400, 400);
        
        // Commented out cause it won't remove iteself when asked politely
        // this.shopFrame.asset = assets.shopFrame;
        this.shopClose.asset = assets.shopClose;
        this.shopChicken.asset = assets.shopChicken;
    }

    clearShop(){
        // @James, this is where the shop ui should be removed but the textures remain
        this.shopFrame.remove();
        this.shopClose.remove();
        this.shopChicken.remove();
        
        shopGenerated = false;
    }

    checkShop(){
        if(shopOpen && curser.overlaps(this.shopClose)){
            shopOpen = false;
            this.clearShop();
        }

        if(shopOpen && curser.overlaps(this.shopChicken) && game.cash > 4){
            game.cash -= 5;
            game.addChicken();
        }
    }
}

class Factory {
    constructor() {
        
    }
    
    makeBrick(x) {
        let brick = $.makeBoxCollider(x, 50, 100, 25);
        brick.direction = 180;
        brick.health = 1;
        brick.worth = 1;
        brick.static = true;
        let brickTexture = assets.bricks[Math.floor(Math.random() * 4)];
        brick.asset = brickTexture;
        return brick;
    }
    
    makeProjectile() {
        let projectile = $.makeCircleCollider($.w / 2, $.h / 2, 50);
        projectile.direction = 45;
        projectile.power = 1;
        projectile.asset = assets.ball;
        return projectile;
    }

    makeWall(x, y, orientation) {
        let wall;
        if (orientation == "h") {
            wall = $.makeBoxCollider(x, y, $.w + 50, 50);
            wall.bounceAngle = 180;
            wall.asset = assets.wall;
        }
        if (orientation == "v") {
            wall = $.makeBoxCollider(x, y, 50, $.h + 50);
            wall.bounceAngle = 360;
        }
        wall.static = true;

        return wall;
    }

    makePlayer() {
        let player = $.makeBoxCollider($.w / 2, $.h * 0.75 + 100, 200, 35);
        player.static = true;
        player.asset = assets.player;
        return player;
    }
}

//Setup
let spriteFactory = new Factory();
let game = new Game();
let shop = new Shop();
let brickOverflow = false;
let shopOpen = false;
let shopGenerated = false;

let curser = $.makeCircleCollider($.mouse.x, $.mouse.y, 1)
let playerProjectile = spriteFactory.makeProjectile();

walls.push(spriteFactory.makeWall($.w / 2, -25, "h"));
walls.push(spriteFactory.makeWall($.w / 2, $.h - 25, "h"));
walls.push(spriteFactory.makeWall(-25, $.h / 2, "v"));
walls.push(spriteFactory.makeWall($.w + 25, $.h / 2, "v"));
let brickBarrier = spriteFactory.makeWall($.w / 2, $.h * 0.75, "h");

let player = spriteFactory.makePlayer();

let shopButton = $.makeBoxCollider($.w - 100, 1175, 100, 40);
shopButton.static = true;
shopButton.asset = assets.shop;

// Projectile Handling
function handleProjectiles() {
    playerProjectile.speed = 50;
    
    for (let i = 0; i < walls.length; i++) {
        if (playerProjectile.collides(walls[i])) {
            projectileBounce(walls[i].bounceAngle);
        }
    }

    if(playerProjectile.x < 35){
        projectileBounce(360);
    }
}

function projectileBounce(angle) {
    playerProjectile.direction = angle - playerProjectile.direction;
}


// Brick Handling
function handleBricks() {
    // Brick movement
    if (!brickOverflow) {
        for (let i = 0; i < bricks.length; i++) {
            bricks[i].speed = 0.5;
        }
    }
    
    // Brick Collision Handling
    for (let i = 0; i < bricks.length; i++) {
        if ((bricks[i]).collides(playerProjectile)) {
            bricks[i].health -= playerProjectile.power;

            projectileBounce(180);
            playerProjectile.speed = 20;

            if (bricks[i].health <= 0) {
                bricks[i].asset = "";
                bricks[i].remove();
                game.cash += bricks[i].worth;
                game.score += bricks[i].worth;
            }
        }

        if (bricks.collides(brickBarrier)) {
            brickOverflow = true;
        }
        else {
            brickOverflow = false;
        }
    }

    // New row Creation and Checking
    brickRow();
}

function brickRow() {
    if (!brickOverflow && $.frameCount % 450 == 0) {
        for (let i = 100; i < $.w; i += 150) {
            bricks.push(spriteFactory.makeBrick(i));
        }
    }
}


// Player Handling
function handlePlayer() {
    if ($.mouse.x > player.x) {
        player.direction = 90;
        player.speed = 25;
    }
    if ($.mouse.x < player.x) {
        player.direction = 270;
        player.speed = 25;
    }
    if ($.math.distance($.mouse.x, 0, player.x, 0) < 10) {
        player.speed = 0;
    }

    if (player.collides(playerProjectile)) {
        projectileBounce(180);
    }

    playerProjectile.rotation++;
}


// Updates Game Data
function updateGame() {
    if($.frameCount%180 == 0){
        game.score += game.chickens.length * 5;
    }

    game.createUI();
    curser.x = $.mouse.x;
    curser.y = $.mouse.y;

    if ($.mouse.leftDown && curser.overlaps(shopButton)) {
            shopOpen = true;
    } 

    if(shopOpen && !shopGenerated){
        shop.generateShop();
    }

    if($.mouse.leftDown){
        shop.checkShop();
    }
}


// Handles Quirky Bois
function handleChickens(){
    for(let i = 0; i < game.chickens.length; i++){
        let randVelocity = Math.floor(Math.random() * 20);
        if(Math.floor(Math.random() * 10) > 5){
            randVelocity = -randVelocity;
        }
        game.chickens[i].velocity.x = randVelocity;

        if(playerProjectile.collides(game.chickens[i])){
            game.chickens[i].remove();
            game.score -= 25;
        }

        if(game.chickens[i] > $.w || game.chickens[i] < 0){
            game.chickens.x = $.w/2;
        }
    }
}


function update() {
    $.colour.fill = "rgb(10,10,10)";
    let background = $.shape.rectangle($.w / 2, $.h / 2, $.w, $.h);
    handleProjectiles();
    handleBricks();
    handlePlayer();
    handleChickens();

    $.drawEntities();
    updateGame();
}