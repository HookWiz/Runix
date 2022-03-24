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
    };
    /**
     * Check if the HTMLElement is inside the Container on the x axis
     * @param {HTMLElement} element the HTMLElement to check
     * @return {bool} true if the element is inside the container on the x axis otherwise false
     */
    elementInsideContainerXAxis(element) {
        if (element.getBoundingClientRect().x > this.x && element.getBoundingClientRect().right < this.x + this.width) {
            return true;
        }
        return false;
    };
    /**
     * Check if the HTMLElement is inside the Container on the y axis
     * @param {HTMLElement} element the HTMLElement to check
     * @return {bool} true if the element is inside the container on the y axis otherwise false
     */
    elementInsideContainerYAxis(element) {
        if (element.getBoundingClientRect().y > this.y && element.getBoundingClientRect().bottom < this.y + this.height) {
            return true;
        }
        return false;
    };
    /**
     * Check if the HTMLElement is inside the Container
     * @param {HTMLElement} element 
     * @return {bool} true if the element is inside the container otherwise false
     */
    elementInsideContainer(element) {
        if (this.elementInsideContainerXAxis(element) && this.elementInsideContainerYAxis(element)) {
            return true;
        }
        return false;
    }
}