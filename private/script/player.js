/*
Company:  CFPT-I
Author:  Arthur Jegge <arthur.jgg2@eduge.ch>
Project:  Runix
Details:  the file of the class Player
Date: 24.03.2022
Version: 1.0
*/
class Player {
    maxSpeed = 10;
    speedStep = 2;
    speed = 10;
    control = {
        left: 'KeyA',
        right: 'KeyD',
    };
    /*
    accelrate() {
        if (this.speed + this.speedStep < this.maxSpeed) {
            this.speed += this.speedStep;
        }
    };
    decelerate() {
        if (this.speed > 0) {
            this.speed -= this.speedStep;
        }
    };
    */
    /**
     * change the position of the point of view on x axis
     * @param {Number} deplacement 
     * @param {Array} elementsToMove
     */
    moveX(deplacement, elementsToMove) {
        for (let i = 0; i < elementsToMove.length; i++) {
            // use same reference
            let element = elementsToMove[i];
            let newPosX = element.element.offsetLeft + deplacement;
            element.x = newPosX;
        }
    };
    /**
     * update the player
     * @param {Array.<string>} keypress 
     * @param {Array} elementsToMove 
     */
    update(keypress, elementsToMove) {
        if (keypress.length > 0) {
            if (keypress.containKey(this.control.left)) {
                this.moveX(+this.speed, elementsToMove);
            }
            if (keypress.containKey(this.control.right)) {
                this.moveX(-this.speed, elementsToMove);
            }
        }
    }

}