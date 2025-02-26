'use strict';

const scoreInput = document.getElementById('');
const scoreInput = document.getElementById('');
const scoreInput = document.getElementById('');
const scoreInput = document.getElementById('');
const scoreInput = document.getElementById('');

generateButton.addEventlistener('click', () =>{
    const name= nameInput.value;
    const time= timeInput.value;

    console.log(ingredientsInput.value);
    const ingredients = ingredientsInput.value;
    .split('\n')
    .filter(ingredient => ingredient.trim() !== '');

    if(!name || !time || ingredients.lenght === 0){
        alert('vul alle velden in!');
        return;
        
    }
})