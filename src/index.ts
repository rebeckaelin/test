// Vad behövs för ett memoryspel?

// math.random på arrayen (huller om buller)
// Finns det något som ansvarar för flip på kort? annars fixa
// lagra värden från kort i en array
// Vid rätt gissning, se till att kort remains flipped, förmodligen klasskifte
// Ta bort de "rätt valda" värdena ur arrayen
// is flipped, is checked, is correct, flip tillbaka
// checkIfMatched om first === second

// ******************************************MEMORY****************************************//
//Grymma vi är ändå
let cardValue: any;

let card: any;

type CardObject = {
    value: string,
    element: Element
}

let arr: CardObject[] = [];

// *************DOM****************


let allCards = document.querySelectorAll('.memory-card');
// *********** FUNKTIONER ***********

function shuffle() {
    const memoryCards = document.querySelector(".memory-cards");
    if (memoryCards) {
        const cardsArray = Array.from(memoryCards.children);

        for (let i = cardsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            memoryCards.appendChild(cardsArray[j])
        }
    }
}

shuffle()



allCards.forEach(card => {
    // console.log(card);
    let clickedCard = () => {

        if (card.classList.contains("flip")) {
            return; // If the card is already flipped, do nothing
        }

        cardValue = card.getAttribute('data-card');



        flipper(card)
        arr.push({ value: cardValue, element: card });

        // console.log(arr);

        compareValue(arr)

    }

    card.addEventListener("click", clickedCard)

});

function compareValue(array: CardObject[]) {
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
    } else {
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
    param.classList.add("flip")
}

const unflip = (param) => {
    param.classList.remove("flip")
}


