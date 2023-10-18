class Shapes {
    constructor(logoColor) {
      this.logoColor = logoColor;
    }
}

class Circle extends Shapes {
    render() {
        return `
        <circle cx="150" cy="100" r="75" fill="${this.logoColor}" />
        `
    }
}

class Triangle extends Shapes {
    render() {
        return `
        <polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />
        `
    }
}

class Square extends Shapes {
    render() {
        return `
        <rect x="75" y="25" width="150" height="150" fill="${this.logoColor}" />
        `
    }
}

module.exports = {Circle, Triangle, Square};