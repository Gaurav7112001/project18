// Selecting the container and button elements
var colorContainer = document.querySelector(".color-container");
var colorBtnById = document.getElementById('newColor-btn');

// Function to generate a random hex color code
function colorCodeInHex() {
  var char = "abcdef1234567890"; // Corrected character set for hex digits
  var codelen = 6;
  var colorcode = "";
  for (let i = 0; i < codelen; i++) {
    var color = Math.floor(Math.random() * char.length);
    colorcode += char[color]; // Fixed character selection
  }
  return "#" + colorcode;
}

// Function to convert hex color code to RGB format
const hexToRgb = (hex) => {
  var hexValue = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (m, r, g, b) => r + r + g + g + b + b
  );
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
};

// Creating 20 span elements and appending them to the container
for (let i = 0; i < 20; i++) {
  const rec = document.createElement("span");
  rec.classList.add("rec");
  colorContainer.appendChild(rec);
}

// Function to apply random colors to all rec elements
function applyColors() {
  var allRec = document.querySelectorAll(".rec"); // Corrected selector to select elements with the class 'rec'
  allRec.forEach(e => {
    var newColorCode = colorCodeInHex();
    e.style.backgroundColor = newColorCode;
    e.innerHTML = "rgb(" + hexToRgb(newColorCode) + ")";
  });
}

// Apply colors on window load
window.onload = applyColors;

// Apply colors on button click
colorBtnById.onclick = applyColors;
