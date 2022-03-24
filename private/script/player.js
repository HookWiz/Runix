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
    speed = 0;
    control = {
        left: 'KeyA',
        right: 'KeyD',
    };
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
    /**
     * change the position of the point of view on x axis
     * @param {HTMLElement} container
     * @param {Number} deplacement 
     */
    moveX(deplacement) {
        let elementToMove = document.getElementsByClassName('move');
        this.accelrate();
        for (let i = 0; i < elementToMove.length; i++) {
            // use same reference
            let element = elementToMove[i];
            let newPosX = element.getBoundingClientRect().x + deplacement;
            element.style.left = `${newPosX}px`;
        }
    };
    //! Need to upgrade the movement of the player, feel slow and disturbing
    /**
     * update the player
     * @param {Array.<string>} keypress 
     */
    update(keypress) {
        if (keypress.length > 0) {
            if (keypress.containKey(this.control.left)) {
                this.moveX(-this.speed);
            }
            if (keypress.containKey(this.control.right)) {
                this.moveX(+this.speed);
            }
        } else {
            this.decelerate();
        }
    }

}