/* =================================
   MEMORY GAME
================================= */

const techItems = [

    "HTML",
    "CSS",
    "JS",
    "React",
    "Git",
    "AI"

];

const gameCards =
[...techItems, ...techItems];

const board =
document.getElementById(
"memoryBoard"
);

const moveCounter =
document.getElementById(
"moveCounter"
);

const matchCounter =
document.getElementById(
"matchCounter"
);

const gameMessage =
document.getElementById(
"gameMessage"
);

let firstCard = null;
let secondCard = null;

let lockBoard = false;

let moves = 0;
let matches = 0;

/* Shuffle */

gameCards.sort(
() => Math.random() - 0.5
);

/* Create Cards */

gameCards.forEach(item => {

    const card =
    document.createElement("div");

    card.classList.add(
    "memory-card"
    );

    card.dataset.tech = item;

    card.innerHTML =

    `
    <div class="card-front">
        ?
    </div>

    <div class="card-back">
        ${item}
    </div>
    `;

    board.appendChild(card);

    card.addEventListener(
    "click",
    flipCard
    );

});

/* Flip Logic */

function flipCard(){

    if(lockBoard) return;

    if(this === firstCard) return;

    this.classList.add(
    "flip"
    );

    if(!firstCard){

        firstCard = this;

        return;

    }

    secondCard = this;

    moves++;

    moveCounter.textContent =
    moves;

    checkMatch();

}

function checkMatch(){

    const isMatch =

    firstCard.dataset.tech ===
    secondCard.dataset.tech;

    if(isMatch){

        disableCards();

    }else{

        unflipCards();

    }

}

function disableCards(){

    matches++;

    matchCounter.textContent =
    matches;

    firstCard.removeEventListener(
    "click",
    flipCard
    );

    secondCard.removeEventListener(
    "click",
    flipCard
    );

    resetBoard();

    if(matches === techItems.length){

        gameMessage.innerHTML =

        "🎉 Congratulations! You matched all technologies.";

    }

}

function unflipCards(){

    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove(
        "flip"
        );

        secondCard.classList.remove(
        "flip"
        );

        resetBoard();

    },1000);

}

function resetBoard(){

    [firstCard,
    secondCard,
    lockBoard] =

    [null,
    null,
    false];

}