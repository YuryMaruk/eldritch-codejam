import difficulties from './data/difficulties';
import ancientsData from './data/ancients';
import { brownCards, blueCards, greenCards } from './data/mythicCards'


const beast1 = document.querySelector('.eldritch1'),
    beast2 = document.querySelector('.eldritch2'),
    beast3 = document.querySelector('.eldritch3'),
    beast4 = document.querySelector('.eldritch4'),
    btmKnead = document.querySelector('.knead'),
    counter = document.querySelector('.counter'),
    desk = document.querySelector('.desk');

/* Путь к изображению рубашки для карт*/
const pathImgCardBack = './assets/mythicCardBackground.png';
/* Выбранный древний */
let chosenBeast = null;
/* Собранный набор карт для выбранного древнего */
let finalDesk = [];


/* Функция тусует  и возвращает колоду карт*/
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/* Функция тусует колоду и собирает колоду по цвету для древнего*/
function createDesk(numberOfCards, deskOfCards) {
    let arr = [];
    shuffle(deskOfCards);
    for (let i = 0; i < numberOfCards; i++) {
        arr.push(deskOfCards[i]);
    }
    return arr;
}

/* Создает набор карт по уровням для выбранного древнего */
function createDeskForEldritch() {
    let numGreenForBeast = chosenBeast.firstStage.greenCards + chosenBeast.secondStage.greenCards + chosenBeast.thirdStage.greenCards;
    let numBlueForBeast = chosenBeast.firstStage.blueCards + chosenBeast.secondStage.blueCards + chosenBeast.thirdStage.blueCards;
    let numBrownForBeast = chosenBeast.firstStage.brownCards + chosenBeast.secondStage.brownCards + chosenBeast.thirdStage.brownCards;

    let deskOfGreen = createDesk(numGreenForBeast, greenCards);
    let deskOfBrown = createDesk(numBrownForBeast, brownCards);
    let deskOfBlue = createDesk(numBlueForBeast, blueCards);

    let deskFotFirstStage = shuffle(shuffle(
        [].concat(createDesk(chosenBeast.firstStage.greenCards, deskOfGreen),
            createDesk(chosenBeast.firstStage.brownCards, deskOfBrown),
            createDesk(chosenBeast.firstStage.blueCards, deskOfBlue))));
    
    let deskFotSecondtStage = shuffle(shuffle(
        [].concat(createDesk(chosenBeast.secondStage.greenCards, deskOfGreen),
            createDesk(chosenBeast.secondStage.brownCards, deskOfBrown),
            createDesk(chosenBeast.secondStage.blueCards, deskOfBlue))));
    
    let deskFotThirtytStage = shuffle(shuffle(
        [].concat(createDesk(chosenBeast.thirdStage.greenCards, deskOfGreen),
            createDesk(chosenBeast.thirdStage.brownCards, deskOfBrown),
            createDesk(chosenBeast.thirdStage.blueCards, deskOfBlue))));

    finalDesk = [].concat(deskFotFirstStage, deskFotSecondtStage, deskFotThirtytStage);
}

/* Принимает колоду и показывает верхнюю карту, удаляя ее из колоды */
function drawCard(array) {
    if (array.length == 0) {
        desk.style.opacity = '0';
    } else {
        let card = array.shift().cardFace;
        desk.style.backgroundImage = `url(${card})`;
    }
    return array;
}

/* При выборе древнего обновляем визуализацию */
function updateEldritch() {
    counter.style.display = 'none';
    desk.style.display = 'none';
    beast1.style.opacity = '0.5';
    beast2.style.opacity = '0.5';
    beast3.style.opacity = '0.5';
    beast4.style.opacity = '0.5';
    desk.style.backgroundImage = `url(${pathImgCardBack})`;

}

/* Event listeners */

/* Выбираем древнего */
beast1.addEventListener('click', () => {
    updateEldritch();
    chosenBeast = ancientsData[0];
    btmKnead.classList.add('knead-active');
    beast1.style.opacity = '1';
});
beast2.addEventListener('click', () => {
    updateEldritch();
    chosenBeast = ancientsData[1];
    btmKnead.classList.add('knead-active')
    beast2.style.opacity = '1';
});
beast3.addEventListener('click', () => {
    updateEldritch();
    chosenBeast = ancientsData[2];
    btmKnead.classList.add('knead-active')
    beast3.style.opacity = '1';
});
beast4.addEventListener('click', () => {
    updateEldritch();
    chosenBeast = ancientsData[3];
    btmKnead.classList.add('knead-active')
    beast4.style.opacity = '1';
});

/* Замешиваем колоду для древнего*/
btmKnead.addEventListener('click', () => {
    btmKnead.classList.remove('knead-active');
    counter.style.display = 'block';
    desk.style.display = 'block';
    desk.style.opacity = '1';
    createDeskForEldritch();
});

/* Показываем карты по порядку из подготовленной колоды для древнего */
desk.addEventListener('click', () => {
    finalDesk = drawCard(finalDesk);
})

console.log('Результат: 65 баллов');
















