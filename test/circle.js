class Circle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/><text x="167" y="135" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Circle;