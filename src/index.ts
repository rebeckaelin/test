// Vad behövs för ett memoryspel?

// math.random på arrayen (huller om buller)
// Finns det något som ansvarar för flip på kort? annars fixa
// lagra värden från kort i en array
// Vid rätt gissning, se till att kort remains flipped, förmodligen klasskifte
// Ta bort de "rätt valda" värdena ur arrayen
// is flipped, is checked, is correct, flip tillbaka
// checkIfMatched om first === second

// ******************************************VARIABLER****************************************//
let cardValue: any;
let card: any;

type CardObject = {
  value: string;
  card: Element;
};

let arr: CardObject[] = [];

// *************DOM****************

let allCards = document.querySelectorAll(".memory-card");

// *********** FUNKTIONER ***********

function shuffle(): void {
  const memoryCards = document.querySelector(".memory-cards");
  if (memoryCards) {
    const cardsArray = Array.from(memoryCards.children);

    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      memoryCards.appendChild(cardsArray[j]);
    }
  }
}

function compareValue(array: CardObject[]): void {
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
  } else {
    console.log("Dum i huvet är du!");
    setTimeout(() => {
      arr.forEach((cardObj) => {
        unflip(cardObj.card);
      });

      arr.length = 0;
    }, 200);
  }
}

const flip = (param): void => {
  param.classList.add("flip");
};

const unflip = (param): void => {
  param.classList.remove("flip");
};

// ***KÖR SPELET HÄR NERE***//

shuffle();

allCards.forEach((card: Element): void => {
  let clickedCard = () => {
    if (card.classList.contains("flip")) {
      return;
    }
    cardValue = card.getAttribute("data-card");
    flip(card);
    arr.push({value: cardValue, card: card});
    compareValue(arr);
  };

  card.addEventListener("click", clickedCard);
});
