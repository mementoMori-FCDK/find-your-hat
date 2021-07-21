const prompt = require('prompt-sync')({sigint: true});
const consoleClear = require('console-clear');
const clear = require('console-clear');

const FieldMod = require('./field.js');                     // Field module
const Field = FieldMod.Field;
const validDir = ['R', 'L', 'U', 'D'];                      // Valid inputs
let playerPos = [0, 0];

let myField = new Field(10, 10, Field.generateField(10, 10, 20));

function play() {
    // let win = false;
    while (true) {
        myField.print();
        let input = prompt('Make your move: ');
        input = input.toUpperCase();
        if (validDir.includes(input)) {
            clear();
            move(input);
            if (validateMove(playerPos)) {
                if (myField.checkWinCond(playerPos)) {
                    myField.redraw(playerPos);
                    console.log(`You found a hat!\nLast step: Row: ${playerPos[0]} Column: ${playerPos[1]}`);
                    break;
                }
                else {
                    myField.redraw(playerPos);
                    console.log(`Step: Row: ${playerPos[0]} Column: ${playerPos[1]}`)
                }
            }
            else if (!validateMove(playerPos)) {
                console.log(`You lost.\nLast step: Row: ${playerPos[0]} Column: ${playerPos[1]}`);
                break;
            }
        }
        else console.log('Valid inputs are: l(L)/r(R)/u(U)/d(D)');
    }
}

function validateMove(newPos) {
    if (myField.checkMove(newPos)) return true;
    else return false;
}

function move(input) {
    if (input == 'U') playerPos[0]--;
    else if (input == 'D') playerPos[0]++;
    else if (input == 'R') playerPos[1]++;
    else playerPos[1]--;
}

play();
