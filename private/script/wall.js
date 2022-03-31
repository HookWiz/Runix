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
    // the rectange of the Wall
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    // the distance between the player and the Wall
    distance;
    step;

    constructor(container, width, height, distance, step) {
        this.container = container;
        this.width = width;
        this.height = height;
        this.x = container.center.x - this.width / 2;
        this.y = this.container.center.y - this.height / 2;
        this.distance = distance;
        this.step = step;
        this.element = document.createElement('div');
        this.element.classList.add('wall', 'move');
        this.updateStyleFromRect();
        container.element.appendChild(this.element);
    };
    /*
    updateHeightTopFromDistance() {
        let newHeight = this.container.height * this.distance / 1000;
        this.y -= (newHeight - this.height) / 2;
        this.height = newHeight;
    };
    updateWidthLeftFromDistance() {
        let newWidth = this.container.width * this.distance / 1000;
        this.x -= (newWidth - this.width) / 2;
        this.width = newWidth;
    };
    */
    update() {
        this.distance += this.step;
        if (this.distance >= 800) {
            this.distance = 0;
        }
        this.element.style.transform = `perspective(${1000}px) translateZ(${this.distance}px)`
        this.updateStyleFromRect();
    };
    updateStyleFromRect() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
    }

}