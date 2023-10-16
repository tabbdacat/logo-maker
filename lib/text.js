const { throwError } = require("rxjs");

class Text {
    constructor(textValue, textColor) {
        // Checks to see that the password is 3 chars or less
        if(textValue.length > 3) {
            throw new Error('Please enter 3 or less characters');
        }

      this.textValue =  textValue;
      this.textColor = textColor;
    }

    render() {
        return `
        <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="40">${this.textValue}</text>
        `
    }

}

// const example = new Text ("TCP", "blue");

// console.log(example.render());

module.exports = Text;