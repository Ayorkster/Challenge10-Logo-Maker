const fs = require('fs');

async function createSVG(text, textColor, shape, shapeColor) {
  const svgWidth = 300;
  const svgHeight = 200;

  let svgContent = `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;

  switch (shape) {
    case 'circle':
      svgContent += `<circle cx="${svgWidth / 2}" cy="${svgHeight / 2}" r="50" fill="${shapeColor}" />`;
      break;
    case 'triangle':
      svgContent += `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
      break;
    case 'square':
      svgContent += `<rect x="50" y="25" width="200" height="200" fill="${shapeColor}"/>`;
      break;
    default:
      break;
  }

  svgContent += `<text x="167" y="135" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>`;
  svgContent += '</svg>';

  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

module.exports = { createSVG };