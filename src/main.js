import difficulties from './data/difficulties';
import ancientsData from './data/ancients';
import { brownCards, blueCards, greenCards } from './data/mythicCards'


const beast1 = document.querySelector('.eldritch1'),
    beast2 = document.querySelector('.eldritch2'),
    beast3 = document.querySelector('.eldritch3'),
    beast4 = document.querySelector('.eldritch4'),
    btmKnead = document.querySelector('.knead');

let chosenBeast = null;

/* Event listeners */

beast1.addEventListener('click', () => {
    chosenBeast = ancientsData[0];
    btmKnead.classList.add('knead-active')
});
beast2.addEventListener('click', () => { chosenBeast = ancientsData[1] });
beast3.addEventListener('click', () => { chosenBeast = ancientsData[2] });
beast4.addEventListener('click', () => { chosenBeast = ancientsData[3] });

btmKnead.addEventListener('click', () => {});



/*Функция возвращает случайно число от min по max*/

/* function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.abs(Math.floor(rand));
} */

/* Функция тусует колоду карт*/
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

/* Функция собирает колоду по цвету для древнего*/
function createDesk(numberOfCards, deskOfCards) {
    let arr = [];
    shuffle(deskOfCards);
    for (i = 0; i < numberOfCards; i++) {
        arr.push(deskOfCards[i]);
    }
    return arr;
}



/* Шаг №1. Создаем три колоды карт зеленого, коричневого и голубого цвета для определенного древнего и перетусовываем каждую*/

    let numGreenForBeast = chosenBeast.firstStage.greenCards + chosenBeast.secondStage.greenCards + chosenBeast.thirdStage.greenCards;
    let numBlueForBeast = chosenBeast.firstStage.blueCards + chosenBeast.secondStage.blueCards + chosenBeast.thirdStage.blueCards;
    let numBrownForBeast = chosenBeast.firstStage.brownCards + chosenBeast.secondStage.brownCards + chosenBeast.thirdStage.brownCards;

    let deskOfGreen = [];
    let deskOfBrown = [];
    let deskOfBlue = [];

    let deskFotFirstStage = [];
    let deskFotSecondtStage = [];
    let deskFotThirtytStage = [];

    let finalDesk = [].concat(deskFotFirstStage, deskFotSecondtStage, deskFotThirtytStage);

    console.log(numGreenForBeast, numBlueForBeast, numBrownForBeast);










