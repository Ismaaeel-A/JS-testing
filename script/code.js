//Function - slider and respective value display - swegga project
//https://github.com/Ismaaeel-A/Swegga.git
function f1() {
    const fPrice = 150.95,
        mPrice = 180.95

    let fTotal = document.querySelector('[fQuantity]').value * fPrice //pulls value and multiplies by variable
    document.querySelector('[fTotal]').innerHTML = fTotal.toFixed(2) //displays output in element with fTotal attribute
    document.querySelector('[display1]').innerHTML = document.querySelector('[fQuantity]').value //displays range value in element with display1 attribute

    let mTotal = document.querySelector('[mQuantity]').value * mPrice //pulls value and multiplies by variable
    document.querySelector('[mTotal]').innerHTML = mTotal.toFixed(2) //displays output in element with mTotal attribute
    document.querySelector('[display2]').innerHTML = document.querySelector('[mQuantity]').value //displays range value in element with display1 attribute

    let fmCombined = (fTotal + mTotal).toFixed(2)
    document.querySelector('[fmCombined]').innerHTML = fmCombined //display
}
// ----------------------------------------------------------------------------------------------

//Alternative to if/switch statements
let PMarks = 30
let result = (PMarks > 39) ?
    "Pass" : "Fail"; //outputs seperated with : , acts as true/false
console.log(result)
// ----------------------------------------------------------------------------------------------

function hide() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";

    }
  }