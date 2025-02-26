'use strict'; 

let scores =[];

const scoreInput = document.getElementById('');
const scoreInput = document.getElementById('');
const scoreInput = document.getElementById('');
const scoreInput = document.getElementById('');
const scoreInput = document.getElementById('');

addButton.addEventlistener('click', () => {
    let score = Number(scoreInput.value);
    if (score < 0 || score > 20 || )
})

scores.push(score);

let sum = 0;
for(let score of scores){
sum+=score;
}

let average = sum/scores.length;
averageSpan.textContent = average.toFixed(1);

let highest = 0;
for(let score of scores){
if(score > highest){
    highest = score; 
}
}

highestSpan.textContent=highest;

scorelist.innerHTML='';
for(let score of scores){
    let li=document.createElement('li');
    li.textContent=score;
    scorelist.appendchild(li);
}

