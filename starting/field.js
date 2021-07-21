const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(height, width, field) {
        this._field = field;
        this._width = width;
        this._height = height;
    }
    
    set width(width) {
        this._width = width;
    }

    set height(height) {
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get field() {
        return this._field;
    }

    redraw(newPosition) {
        this._field[newPosition[0]][newPosition[1]] = pathCharacter;
        this.print();  
    }

    print() {
        this._field.forEach(element => {
            console.log(element.join(' '));
        });
    }

    checkMove(newPos) {
        if (newPos[0] >= this._height || newPos[0] < 0)
            return false;
        else if (newPos[1] >= this._width || newPos[1] < 0)
            return false;
        else if (this._field[newPos[0]][newPos[1]] == hole)
            return false;
        else return true;
    }

    checkWinCond(newPos) {
        if (this._field[newPos[0]][newPos[1]] == hat) return true;
        else return false;
    }

    static genHatPosition(height, width) {
        let i = Math.floor(Math.random() * height);
        let j = Math.floor(Math.random() * width);
        if((i == 0) && (j == 0)) j++;
        return [i, j];
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

        let checkHatPos = false;                                        // boolean to check new hat position
        let newHatPos;
        while(!checkHatPos) {                                           // check new hat position
            newHatPos = this.genHatPosition(height, width);
            if (field[newHatPos[0]][newHatPos[1]] != hole) checkHatPos = true;
        }
        field[newHatPos[0]][newHatPos[1]] = hat;
        return field;
    }
}

module.exports = {
    Field: Field
}