//let number = 30

let numberEl = document.getElementById("number--el")
let meterToFeetEl = document.getElementById("meter--to-feet")
let literToGallonsEl = document.getElementById("liter--to--gallons")
let kiloToPoundEl = document.getElementById("kilo--to--pound")
let calculateBtn = document.getElementById("calculate--btn")

//numberEl.textContent = number

//const number = getNumber()

function getNumber() {
    //console.log(parseInt(numberEl.value))
    let number = parseInt(numberEl.value)
    let meterToFeet = number + " " + "meters = " + toRound(number * 3.2808) + " feet | "
    let feetToMeter = number + " " + "feet = " + toRound(number * 0.3048) + " meters"
    let resultMeter = meterToFeet + feetToMeter
    meterToFeetEl.textContent = resultMeter


    let literToGallon = number + " " + "liters = " + toRound(number * 0.1142) + " gallons | "
    let GallonToliter = number + " " + "gallons = " + toRound(number * 3.7854) + " liters"
    let resultLiter = literToGallon + GallonToliter
    literToGallonsEl.textContent = resultLiter

    let kiloToPound = number + " " + "Kilograms = " + toRound(number * 2.2046) + " pounds | "
    let poundToKilo = number + " " + "Pounds = " + toRound(number * 0.4536) + " kilograms"
    let resultKilo = kiloToPound + poundToKilo
    kiloToPoundEl.textContent = resultKilo
}

//console.log(number)

calculateBtn.addEventListener('click', getNumber)

function toRound(numberParse) {
    // format a number with 3 decimal
    //console.log(number)
    return Number.parseFloat(numberParse).toFixed(3)
}

function meterToFeet() {
    console.log(getNumber())
}
//console.log(toRound(3.33333333))

/**
 * 
 * function meterToFeet() {
    console.log(getNumber())
    // Convert number given in to meter or feet
    let meterToFeet = number + " " + "meters = " + toRound(number * 3.2808) + " feet | "
    let feetToMeter = number + " " + "feet = " + toRound(number * 0.3048) + " meters"
    let result = meterToFeet + feetToMeter
    meterToFeetEl.textContent = result
}
meterToFeet()


function literToGallons() {
    // Convert number given in to liter or gallons
    let literToGallon = number + " " + "liters = " + toRound(number * 0.1142) + " gallons | "
    let GallonToliter = number + " " + "gallons = " + toRound(number * 3.7854) + " liters"
    let result = literToGallon + GallonToliter
    literToGallonsEl.textContent = result
}
literToGallons()


function kiloToPound() {
    // Convert number given in to killogram or pound
    let kiloToPound = number + " " + "Kilograms = " + toRound(number * 2.2046) + " pounds | "
    let poundToKilo = number + " " + "Pounds = " + toRound(number * 0.4536) + " kilograms"
    let result = kiloToPound + poundToKilo
    kiloToPoundEl.textContent = result
}
kiloToPound()
 * 
 */

