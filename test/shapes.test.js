const Square = require('./square');
const Circle = require('./circle');
const triangle = require('./triangle');
const Triangle = require('./triangle');
describe("Shape", () => {
    describe("Square", () => {
        it("should make a square with given input", () => {
            const square = new Square("green", "abc", "black");
            expect(square.color).toBe("green"); 
            expect(square.text).toBe("abc"); 
            expect(square.textColor).toBe("black"); 
            expect(square.render()).toBe(`<rect x="50" y="25" width="200" height="200" fill="${square.color}"/><text x="167" y="135" fill="${square.textColor}">${square.text}</text>`)
        });
    });
    describe("Circle", () => {
        it("should make a circle with given input", () => {
            const circle = new Circle("green", "abc", "black");
            expect(circle.color).toBe("green"); 
            expect(circle.text).toBe("abc"); 
            expect(circle.textColor).toBe("black"); 
            expect(circle.render()).toBe(`<circle cx="150" cy="100" r="100" fill="${circle.color}"/><text x="167" y="135" fill="${circle.textColor}">${circle.text}</text>`)
        });
    });
    describe("Triange", () => {
        it("should make a triangle with given input", () => {
            const triangle = new Triangle("green", "abc", "black");
            expect(triangle.color).toBe("green"); 
            expect(triangle.text).toBe("abc"); 
            expect(triangle.textColor).toBe("black"); 
            expect(triangle.render()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="${triangle.color}"/><text x="167" y="135" fill="${triangle.textColor}">${triangle.text}</text>`)
        });
    });
});