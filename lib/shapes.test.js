const {Circle, Triangle, Square} = require('./lib/shapes.js')

describe('Triangle', () => {
    it('should return a string for svg file via render with shape color',() => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
     } )
    })

describe('Circle', () => {
    it('should return a string for svg file via render with shape color',() => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="75" fill="blue" />');
        } )
    })

describe('Square', () => {
    it('should return a string for svg file via render with shape color',() => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="150" y="150" width="150" height="150" fill="blue" />');
        } )
    })