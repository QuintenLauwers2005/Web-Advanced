'use strict';

const grid =document.getElementById('grid');
const redCount = document.getElementById("redCount");
const blueCount = document.getElementById("blueCount");
const greenCount = document.getElementById("greenCount");

let colorCounts = { red:0 , blue:0, green:0 };

function countWeergeven() {
    redCount.textContent = colorCounts.red;
    blueCount.textContent = colorCounts.blue;
    greenCount.textContent = colorCounts.green;
}

for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);

  // Pointerover event verandert de kleur naar rood
  cell.addEventListener('pointerover', () => {
    if (cell.style.backgroundColor !== "blue" && cell.style.backgroundColor !== "green") {
        cell.style.backgroundColor = "red";
        colorCounts.red++
        countWeergeven();
    }
})

    cell.addEventListener('click', () => {
        // Verander de kleur naar blauw als het blauw nog niet is
        if (cell.style.backgroundColor !== "blue") {
            cell.style.backgroundColor = "blue";
            colorCounts.blue++;  // Verhoog de blauwe teller
            countWeergeven();  // Werk de tellingen bij
        }
    });

    cell.addEventListener('dblclick', () => {
        // Verander de kleur naar groen
        if (cell.style.backgroundColor !== "green") {
            cell.style.backgroundColor = "green";
            colorCounts.green++;  // Verhoog de groene teller
            countWeergeven();  // Werk de tellingen bij
        }
    });
}