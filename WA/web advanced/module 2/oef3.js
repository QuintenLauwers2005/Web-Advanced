'use strict';

const nameInput= document.getElementById('productName');
const priceInput= document.getElementById('productName');
const addButton= document.getElementById('productName');
const sortButton =document.getElementById('sortByPrice');
const totalSpan = document.getElementById('total');
const cartList = document.getElementById('cartItems');

addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const price = Number(priceInput.value);

    if(!){

    }

    const product ={
        name: name,
        price: price
    };
})