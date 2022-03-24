/*
Company:  CFPT-I
Author:  Arthur Jegge <arthur.jgg2@eduge.ch>
Project:  Runix
Details:  the file of the class Wall
Date: 24.03.2022
Version: 1.0
*/
class Wall {
    // the rectange of the Wall
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    // the distance between the player and the Wall
    distance = 0;

    constructor(container, x, y, width, height, distance) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.distance = distance;
        let wall = document.createElement('div');
        wall.classList.add('wall', 'move');
        container.appendChild(wall);
    }

    update() {

    }

}