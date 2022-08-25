function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createDesk(numberOfCards, deskOfCards) {
    let arr = [];
    shuffle(deskOfCards);
    for(i = 0; i < numberOfCards; i++) {
        arr.push(deskOfCards[i]);
    }
    return arr;
}

let deskg = [1, 2, 3,4,5,6,7,8,9];

console.log(createDesk(3, deskg));
