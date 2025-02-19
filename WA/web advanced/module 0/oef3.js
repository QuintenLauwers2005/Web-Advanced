'use strict';

const themaknop = document.getElementById('themaknop');
const paginabody = document.getElementsByName('body');

themaknop.addEventListener('click', () =>{
    paginabody.style.backgroundColor = 'black';
    paginabody.style.Color = 'white';
    themaknop.textContent='ligt thema';
})