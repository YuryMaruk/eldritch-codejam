import difficulties from './data/difficulties';
import ancientsData from './data/ancients';


const beast1 = document.querySelector('.eldritch1'),
    beast2 = document.querySelector('.eldritch2'),
    beast3 = document.querySelector('.eldritch3'),
    beast4 = document.querySelector('.eldritch4');

let chosenBeast = null;

/* Event listeners */

beast1.addEventListener('click', () => {chosenBeast = ancientsData[0]});
beast2.addEventListener('click', () => {chosenBeast = ancientsData[1]});
beast3.addEventListener('click', () => {chosenBeast = ancientsData[2]});
beast4.addEventListener('click', () => {chosenBeast = ancientsData[3]});