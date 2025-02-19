'use strict';

const getal1Input = document.getElementById('getal1');
const getal2Input = document.getElementById('getal2');
const berekenknop = document.getElementById('bereken');
const resultaatveld = document.getElementById('resultaat');

berekenknop.addEventListener('click', () => {
    const nr1 = Number(getal1Input.value);
    const nr2 = Number(getal2Input.value);

    if (isNaN(nr1) || isNaN(nr2)){
        resultaatveld.textContent ='voer alstublieft geldige getallen in!';
        return;
    }

    const som = nr1 + nr2;
    resultaatveld.textContent= `${som}`;
})