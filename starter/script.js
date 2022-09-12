'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-Modal');
console.log(btnsOpenModal);

//conflict arises when using query selector when there are many html elements with the same class name.DocumentQuery selctor will select the first one only.

//in this case it is wise to use querySelectorAll I.E
//const btnsOpenModal = document.querySelectorAll('.show-Modal');

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);
