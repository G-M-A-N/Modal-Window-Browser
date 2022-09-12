'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//conflict arises when using query selector when there are many html elements with the same class name.DocumentQuery selctor will select the first one only.

//in this case it is wise to use querySelectorAll I.E
//const btnsOpenModal = document.querySelectorAll('.show-Modal');

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);

overLay.addEventListener('click', closeModal);

//the function does not have a () so that the function is not called immediately.

document.addEventListener('keydown', function (gr) {
  if (gr.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
