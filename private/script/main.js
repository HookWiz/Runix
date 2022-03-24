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
let deltaTime;
let keypress = [];
/**
 * Check if the array contain the key passed in parameter
 * @param {string} key the key to check
 * @return {bool} true if the array contains the key otherwise false
 */
keypress.containKey = function(key) {
    return keypress.find(code => {
        if (code == key) {
            return true;
        }
        return false;
    });
};
// Keyboard Management
document.onkeydown = event => {
    keycode = event.code;
    let index = keypress.indexOf(keycode);
    // if not in keypress
    if (index == -1) {
        keypress.push(keycode);
    }
};
document.onkeyup = event => {
    keycode = event.code;
    let index = keypress.indexOf(keycode);
    // if in keypress
    if (index != -1) {
        keypress.splice(index, 1);
    }
};

setInterval(() => {
    deltaTime = Date.now();
    player.update(keypress);
}, 1000 / 60);