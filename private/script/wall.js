/*
Company:  CFPT-I
Author:  Arthur Jegge <arthur.jgg2@eduge.ch>
Project:  Runix
Details:  the file of the class Wall
Date: 24.03.2022
Version: 1.0
*/
class Wall {
    // the HTMLElement
    container;
    element;
    // the spawnArea
    spawnArea = {
        x: container.center.x - 50,
        y: container.center.y - 50,
        width: 100,
        height: 100,
    };
    // the rectange of the Wall
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    // the distance between the player and the Wall
    distance;
    step;
    ratio;

    constructor(container, width, height, distance, step) {
        this.container = container;
        this.width = width;
        this.height = height;
        this.generateWallPos();
        this.distance = distance;
        this.step = step;
        this.ratio = width / height;
        this.element = document.createElement('div');
        this.element.classList.add('wall', 'move');
        this.updateStyleFromRect();
        this.container.element.appendChild(this.element);
    };


    generateWallPos() {
        this.x = Math.random() * (this.spawnArea.width - this.width) + this.spawnArea.x;
        this.y = this.container.center.y - this.height / 2;
    }

    updateHeightYFromDistance() {
        let newHeight = this.container.height * this.distance / 1000;
        this.y -= (newHeight - this.height) / 2;
        this.height = newHeight;
    };
    updateWidthXFromRatio() {
        let newWidth = this.ratio * this.height;
        this.x -= (newWidth - this.width) / 2;
        this.width = newWidth;
    };
    update() {
        // Arreter de grandire avant la zone de collision
        this.distance += this.step;
        if (this.distance >= 1000) {
            //this.element.remove();
            this.distance = 0;
        }
        this.updateHeightYFromDistance();
        this.updateWidthXFromRatio();
        this.updateStyleFromRect();
    };
    updateStyleFromRect() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
    }

}