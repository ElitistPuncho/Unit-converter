const feet = 3.280 // In a meter
const gallon = 0.264 // In a liter
const pound  = 2.205 // In a Kilogram

const lengthConv = document.getElementById("length-conv")
const volumeConv = document.getElementById("volume-conv")
const massConv = document.getElementById("mass-conv")

let userInput = document.getElementById("num")
userInput.value = 0;

function conversionCalc(unit) {
    userInput = document.getElementById("num").value
    conv1 = userInput * unit
    conv2 = userInput / unit
    fixed1 = conv1.toFixed(3)
    fixed2 = conv2.toFixed(3)
}

function tartetEl(id, unit1, unit2) {
    id.innerHTML = `${userInput} ${unit1} = ${fixed1} ${unit2} | ${userInput} ${unit2} = ${fixed2} ${unit1}`
}

function lengthUnits() {
    conversionCalc(feet)
    tartetEl(lengthConv, "meters", "feet")
}

function volumeUnits() {
    conversionCalc(gallon)
    tartetEl(volumeConv, "liters", "gallons")
}

function massUnits() {
    conversionCalc(pound)
    tartetEl(massConv, "kilo", "pounds")
}

function displayResults() {
    lengthUnits()
    volumeUnits()
    massUnits()  
}

displayResults()