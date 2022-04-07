/*
Company:  CFPT-I
Author:  Arthur Jegge <arthur.jgg2@eduge.ch>
Project:  Runix
Details:  the file that containes the interaction
Date: 07.04.2022
Version: 1.0
*/

/*
! Problème, ne s' arrète jamais de se déplacer
*/

let control = {
    left: 'KeyA',
    right: 'KeyD',
};
let action = {
    left: false,
    right: false,
};
let keypress = [];
let mouse = {
    clicked: false,
    x: 0,
    y: 0,
};
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

// Click Management
document.onclick = event => {
    mouse.clicked = true;
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}

function updateActionFromClick() {
    if (mouse.clicked) {
        if (container.positionInsideContainer(mouse.x, mouse.y)) {
            if (mouse.x >= container.center.x) {
                action.right = true;
            } else {
                action.left = true;
            }
        }
    } else {
        action.left = false;
        action.right = false;
    }
    mouse.clicked = false;
}

function updateActionFromKey() {
    if (keypress.length > 0) {
        if (keypress.containKey(control.left)) {
            action.left = true;
        } else {
            action.left = false;
        }
        if (keypress.containKey(control.right)) {
            action.right = true;
        } else {
            action.right = false;
        }
    }
}