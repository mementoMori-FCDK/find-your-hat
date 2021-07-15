const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    get field() {
        return this._field;
    }

    print() {
        this._field.forEach(element => {
            console.log(element.join(' '));
        });
    }

    static generateField(height, width, percentage) {
        let field = [];
        for (let i = 0; i < height; i++) {
            let row = []
            for (let j = 0; j < width; j++) {
                row[j] = fieldCharacter;
            }
            field.push(row);
        }

        let holesNum = Math.floor(height * width * percentage / 100);
        field[0][0] = pathCharacter;
        for (let i = 0; (i < height) && (holesNum > 0); i++) {
            let holePos = Math.floor(Math.random() * width);
            if (holePos == 0 && i == 0) holePos++;                      // check start position 
            if (field[i][holePos] == hole) holePos++;                   // already a hole
            field[i][holePos] = hole;
            holesNum--;
            if (i == (width - 1)) i = 0;
        }
        return field;
    }
}

let map = Field.generateField(10, 10, 15);
const newField = new Field(map);
newField.print();

module.exports = {
    Field: Field
}