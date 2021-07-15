const prompt = require('prompt-sync')({sigint: true});
const { Field } = require('./field.js');
const fieldMod = require('./field.js');

const Fields = require('./field.js');

let newField = new Fields.Field(Field.generateField());
newField.print();