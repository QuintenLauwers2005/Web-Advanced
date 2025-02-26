'use strict';

let SpecialElements = document.querySelectorAll('.special');
SpecialElements.forEach(element => {
    element.style.color= "red";
});

let tweedeParagraaf = document.querySelector(".container p:nth-of-type(2)");
if(tweedeParagraaf){
    tweedeParagraaf.style.textDecoration ="underline";
}

let outputDiv = document.getElementById("output");
    outputDiv.textContent = `Aantal elementen met class 'special': ${specialElements.length}`;



