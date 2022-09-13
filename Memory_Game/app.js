const cardArray = [
  {
    name: 'fries',
    img:  'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img:  'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img:  'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img:  'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img:  'images/milkshake.png',
  },
  {
    name: 'pizza',
    img:  'images/pizza.png',
  },
  {
    name: 'fries',
    img:  'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img:  'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img:  'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img:  'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img:  'images/milkshake.png',
  },
  {
    name: 'pizza',
    img:  'images/pizza.png',
  }
];


cardArray.sort(() => 0.5 - Math.random()); //randomizes array arrangement every refresh

const gridDisplay = document.querySelector('#grid');
let cardsChosen, cardsChosenIds, cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      gridDisplay.appendChild(card);
    }
}

createBoard(); //calls function to createBoard

function checkMatch() {
  const cards = document.querySelectorAll('#grid img');
  const resultDisplay = document.querySelector('#result');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  if (optionOneId == optionTwoId) //0 and 1 refers to the first image and second image clicked
    {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert(`It's just the same image!`);
    }
    if (cardsChosen[0] == cardsChosen[1]) {
      alert(`It's a match!`)
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } //removes images from play
    else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      //covers images again
      alert('Try again!');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen, cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
      resultDisplay.innerHTML = 'You win!'
    }
}

function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute('src', cardArray[cardId].img); //displays image
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500) //sets time before images are reshuffled
  }
}
