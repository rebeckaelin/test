let cardValue;
let card;
let arr = [];
let allCards = document.querySelectorAll(".memory-card");
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
function compareValue(array) {
    if (array.length < 2) {
        return;
    }
    let lastIndex = array.length - 1;
    let secondLastIndex = array.length - 2;
    if (array[lastIndex].value === array[secondLastIndex].value) {
        console.log("wohoo");
        arr.forEach((cardObj) => {
            console.log(cardObj);
            cardObj.card.classList.add("flip");
            cardObj.card.removeEventListener("click", cardObj.card["clickedCard"]);
        });
        arr.length = 0;
    }
    else {
        console.log("Dum i huvet är du!");
        setTimeout(() => {
            arr.forEach((cardObj) => {
                unflip(cardObj.card);
            });
            arr.length = 0;
        }, 200);
    }
}
const flip = (param) => {
    param.classList.add("flip");
};
const unflip = (param) => {
    param.classList.remove("flip");
};
shuffle();
allCards.forEach((card) => {
    let clickedCard = () => {
        if (card.classList.contains("flip")) {
            return;
        }
        cardValue = card.getAttribute("data-card");
        flip(card);
        arr.push({ value: cardValue, card: card });
        compareValue(arr);
    };
    card.addEventListener("click", clickedCard);
});
