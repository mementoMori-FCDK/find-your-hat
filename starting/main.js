const prompt = require('prompt-sync')({sigint: true});
const clear = require('console-clear');

const FieldMod = require('./field.js');                     // Field module
const Field = FieldMod.Field;
const validDir = ['R', 'L', 'U', 'D'];                      // Valid inputs
let playerPos = [0, 0];

let myField = new Field(Field.generateField(10, 10, 20));

function play() {
    // let win = false;
    while (true) {
        myField.print();
        let input = prompt('Make your move: ');
        input = input.toUpperCase();
        if (validDir.includes(input)) move(input);
        else console.log('Valid inputs are: l(L)/r(R)/u(U)/d(D)');
    }
}

function move(input) {
    clear();
    if (input == 'U') {
        playerPos[0]--;
        myField.redraw(playerPos);
    }
    else if (input == 'D') {
        playerPos[0]++;
        myField.redraw(playerPos);
    }
    else if (input == 'R') {
        playerPos[1]++;
        myField.redraw(playerPos);
    }
    else {
        playerPos[1]--;
        myField.redraw(playerPos);
    }
}

play();
