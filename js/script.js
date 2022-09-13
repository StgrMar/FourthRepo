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

const getInputType = document.querySelector('.rollback input');
console.log(getInputType);

const getInputType2 = document.querySelector('.rollback span');
console.log(getInputType2);

const getTotal = document.getElementsByClassName('total-input');
console.log(getTotal[0]);

const getTotalCount = document.getElementsByClassName('total-input');
console.log(getTotalCount[1]);

const getTotalCountOther = document.getElementsByClassName('total-input');
console.log(getTotalCountOther[2]);

const getTotalFullCount = document.getElementsByClassName('total-input');
console.log(getTotalFullCount[3]);

const getTotalCountRollback = document.getElementsByClassName('total-input');
console.log(getTotalCountRollback[4]);


let screens = document.querySelectorAll('.screen option');
console.log(screens);

