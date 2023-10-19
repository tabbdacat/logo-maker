const { Circle, Triangle, Square } = require('./shapes.js')

describe('Triangle', () => {
    it('should return a string for svg file via render with shape color', () => {
        const newShape = new Triangle();
        newShape.setColor("blue");
        expect(newShape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe('Circle', () => {
    it('should return a string for svg file via render with shape color', () => {
        const newShape = new Circle();
        newShape.setColor("blue");
        expect(newShape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />');
    })
})

describe('Square', () => {
    it('should return a string for svg file via render with shape color', () => {
        const newShape = new Square();
        newShape.setColor("blue");
        expect(newShape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />');
    })
})