const levelSelection = document.getElementById("level-selection");
const playGame = document.getElementById("play-game");
const boardContainer = document.getElementById("board-container");

//1.recuperare il livello scelto dall'utente al click del play
//2.creazione di una funzione che indica il numero di celle in base ad un livello
//3.abbinare il numero di celle al livello scelto dell'utente


//1.
playGame.addEventListener ("click", function() {
    let level = parseInt(levelSelection.value);
    //il valore del livello è un numero da 1 a 3 
    console.log(level);
    
    //3.
    let totalBoxes = levelToBox(level);
    console.log(totalBoxes);
})

//2.
function levelToBox (level) {
    let numberOfBoxes

    if (level === 1) {
        numberOfBoxes = 100;
    } else if (level === 2) {
        numberOfBoxes = 81;
    }else if (level === 3) {
        numberOfBoxes = 49;
    }

    return numberOfBoxes;
}