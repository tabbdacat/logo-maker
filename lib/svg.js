class SVG {
    constructor(text, shape) {
        this.height = 200;
        this.width = 300;
        this.text = text;
        this.shape = shape;
    }
    render() {
        return `
        <svg viewbox="0 0 ${this.width} ${this.height}">
    ${this.shape.render()}

    ${this.text.render()}

</svg>
        `
    }
}

module.exports = SVG;