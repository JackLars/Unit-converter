const themeSwitch = document.getElementById("checkbox");
const darkTheme = document.getElementById("container");
const convertBtn = document.getElementById("btn");

const meter = 3.281;
const liter = 0.264;
const kilo = 2.204;

var conversionNumber = document.getElementById("converting-number");
var unitNumber = document.getElementsByClassName("unit-number");
var feet = document.getElementById("feet");
var meters = document.getElementById("meters");
var gallons = document.getElementById("gallons");
var liters = document.getElementById("liters");
var pounds = document.getElementById("pounds");
var kilos = document.getElementById("kilos");


// Switching theme between dark and light

themeSwitch.addEventListener("click", function() {
    if(darkTheme.classList.contains("dark-theme")) {
        darkTheme.classList.remove("dark-theme");
    } else {
        darkTheme.classList.add("dark-theme");
    }
});


// Converting units

convertBtn.addEventListener("click", function() {
    
    for (var i = 0; i < unitNumber.length; i++) {
        unitNumber[i].innerHTML = conversionNumber.value;
    }

    feet.innerHTML = (conversionNumber.value * meter).toFixed(2);
    meters.innerHTML = (1 / meter * conversionNumber.value).toFixed(2);
    gallons.innerHTML = (conversionNumber.value * liter).toFixed(2);
    liters.innerHTML = (1 / liter * conversionNumber.value).toFixed(2);
    pounds.innerHTML = (conversionNumber.value * kilo).toFixed(2);
    kilos.innerHTML = (1 / kilo * conversionNumber.value).toFixed(2);
});