const Text = require('./lib/text.js');


describe('Text', () => {
// test for error if more than 3 chars are entered
    describe('Errors', () => {
      it('should throw an error when more than 3 chars are enters', () => {
        const text = () => new Text("Hello", "brown");
        expect(text).toThrowError("Please enter 3 or less characters");
      });
    });
  });
