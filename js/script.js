'use strict';

const getH1 = document.getElementsByTagName('h1');
console.log(getH1[0]);


const getHandler_btn = document.getElementsByClassName('handler_btn');
console.log(getHandler_btn[0]);
console.log(getHandler_btn[1]);

const getScreen_btn = document.querySelector('.screen-btn');
console.log(getScreen_btn);

const getOther_items = document.querySelectorAll('.other-items.number');
const getOther_items2 = document.querySelectorAll('.other-items.percent');
console.log(getOther_items);
console.log(getOther_items2);

const getInputType = document.querySelector('.main-controls__range');
console.dir(getInputType.childNodes[1]);

const getInputType2 = document.querySelector('div > span:last-child');
console.log(getInputType2);

const getTotal_input = document.getElementsByClassName('total-input');
console.log(getTotal_input);

let screen = document.querySelectorAll('option');
console.log(screen);

