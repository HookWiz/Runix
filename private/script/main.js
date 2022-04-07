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
let walls = [];

for (let i = 0; i < 1; i++) {
    walls.push(new Wall(container, 2, 5, 0, 10));
}


setInterval(() => {
    updateActionFromClick();
    //updateActionFromKey();
    player.update(action, walls);
    for (let wall of walls) {
        wall.update();
    }
}, 1000 / 60);