/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputField = document.getElementById("inputfield")
let convertBtn = document.getElementById("convert-btn")
let outPut1 = document.getElementById("output1")
let outPut2 = document.getElementById("output2")
let outPut3 = document.getElementById("output3")

convertBtn.addEventListener("click", function(){
    let inputNumber = inputField.value
    lengthM = inputNumber * 3.281
    lengtF = inputNumber / 3.281
    outPut1.textContent = `${inputNumber} meters = ${lengthM.toFixed(3)} feet | ${inputNumber} feet = ${lengtF.toFixed(3)} meters`
    volumeL = inputNumber * 0.264
    volumeG = inputNumber / 0.264
    outPut2.textContent = `${inputNumber} liters = ${volumeL.toFixed(3)} gallons | ${inputNumber} gallons = ${volumeG.toFixed(3)} liters`
    massK = inputNumber * 2.204
    massP = inputNumber / 2.204
    outPut3.textContent = `${inputNumber} kilos = ${massK.toFixed(3)} pounds | ${inputNumber} pounds = ${massP.toFixed(3)} kilos`
})




