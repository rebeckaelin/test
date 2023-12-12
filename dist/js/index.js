let cardValue;
let card;
let arr = [];
let allCards = document.querySelectorAll('.memory-card');
function shuffle() {
    const memoryCards = document.querySelector(".memory-cards");
    if (memoryCards) {
        const cardsArray = Array.from(memoryCards.children);
        for (let i = cardsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            memoryCards.appendChild(cardsArray[j]);
        }
    }
}
shuffle();
allCards.forEach(card => {
    let clickedCard = () => {
        if (card.classList.contains("flip")) {
            return;
        }
        cardValue = card.getAttribute('data-card');
        flipper(card);
        arr.push({ value: cardValue, element: card });
        compareValue(arr);
    };
    card.addEventListener("click", clickedCard);
});
function compareValue(array) {
    if (array.length < 2) {
        return;
    }
    let lastIndex = array.length - 1;
    let secondLastIndex = array.length - 2;
    if (array[lastIndex].value === array[secondLastIndex].value) {
        console.log("wohoo");
        arr.forEach(cardObj => {
            cardObj.element.classList.add("flip");
            cardObj.element.removeEventListener("click", cardObj.element['clickedCard']);
        });
        arr.length = 0;
    }
    else {
        console.log("Dum i huvet är du!");
        setTimeout(() => {
            arr.forEach(cardObj => {
                unflip(cardObj.element);
            });
            arr.length = 0;
        }, 1500);
    }
}
const flipper = (param) => {
    param.classList.add("flip");
};
const unflip = (param) => {
    param.classList.remove("flip");
};
