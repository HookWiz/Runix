/*
Company:  CFPT-I
Author:  Arthur Jegge <arthur.jgg2@eduge.ch>
Project:  Runix
Details:  the file of the class Container
Date: 24.03.2022
Version: 1.0
*/
class Container {
    element;
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    center = {
        x: 0,
        y: 0,
    };
    /**
     * Initalise the container, the HTMLElement must have the class tag 'container'
     * @param {HTMLElement} element the HTMLElement with the class tag 'container'
     */
    constructor(element) {
        this.element = element;
        this.x = this.element.getBoundingClientRect().x;
        this.y = this.element.getBoundingClientRect().y;
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        // the center.x start from the x position of the element
        this.center.x = this.width / 2;
        // the center.y start from the x position of the element
        this.center.y = this.height / 2;
    }
}