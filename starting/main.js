const prompt = require('prompt-sync')({sigint: true});

const FieldMod = require('./field.js');                     // Field module
const Field = FieldMod.Field; 

let myField = new Field(Field.generateField(10, 10, 20));