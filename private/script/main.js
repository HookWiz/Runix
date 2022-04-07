/*
Company:  CFPT-I
Author:  Arthur Jegge <arthur.jgg2@eduge.ch>
Project:  Runix
Details:  the main script
Date: 24.03.2022
Version: 1.0
*/

// Initialisation
const container = new Container(document.getElementsByClassName('container')[0]);
const player = new Player();
let currentScene = 'game';
let walls = [];
walls.addWall = function() {
    this.push(new Wall(container, 2, 5, 0, 1));
};
walls.addWall();
let looseRect = {
    x: container.center.x - 50,
    y: 0,
    width: 100,
    height: container.height,
};
let lRect = document.getElementsByClassName('spawn-area')[0];
lRect.style.top = `${looseRect.y}px`;
lRect.style.left = `${looseRect.x}px`;
lRect.style.width = `${looseRect.width}px`;
lRect.style.height = `${looseRect.height}px`;

function cleanGameScreen() {
    for (let element of document.getElementsByClassName('wall')) {
        element.setAttribute('hidden', '');
    }
}
setInterval(() => {
    //updateActionFromClick();
    updateActionFromKey();
    if (currentScene == 'game') {
        player.update(action, walls);
        for (let wall of walls) {
            wall.update();
            if (wall.distance >= 950) {
                if (!(wall.x > looseRect.x + looseRect.width ||
                        wall.x + wall.width < looseRect.x ||
                        wall.y > looseRect.y + looseRect.height ||
                        wall.y + wall.height < looseRect.y)) {
                    currentScene = 'end';
                    cleanGameScreen();
                }
            }
        }
    }
    if (currentScene == 'end') {}
}, 1000 / 60);

setInterval(() => {
    if (currentScene == 'game') {
        walls.addWall();
    }
}, 2000);