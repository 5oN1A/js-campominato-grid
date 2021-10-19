const levelSelection = document.getElementById("level-selection");
const playGame = document.getElementById("play-game");
const boardContainer = document.getElementById("board-container");

//1. recuperare il livello scelto dall'utente al click del play
//2. creazione di una funzione che indica il numero di celle in base ad un livello
//3. abbinare il numero di celle al livello scelto dell'utente


//1.
playGame.addEventListener("click", function () {
    let level = parseInt(levelSelection.value);
    //il valore del livello è un numero da 1 a 3 
    console.log(level);

    //3.
    let totalBoxes = levelToBox(level);
    console.log(totalBoxes);

    boxCreation(totalBoxes);
})

//2.
function levelToBox(level) {
    let numberOfBoxes

    if (level === 1) {
        numberOfBoxes = 100;
    } else if (level === 2) {
        numberOfBoxes = 81;
    } else if (level === 3) {
        numberOfBoxes = 49;
    }

    return numberOfBoxes;
}


//4. creazione di una funzione che aggiunge in html il n di celle in base al valore di total-boxes 
//5. trovare la width e height adatta in base al numero di celle per ogni riga/colonna
//6. al click su ogni cella aggiungere classe active

//4.
function boxCreation(totalBoxes) {
    boardContainer.innerHTML= "";

    console.log(totalBoxes);

    let numberOfCols = Math.sqrt(totalBoxes, 2);
    console.log(numberOfCols);

    for (let index = 0; index < totalBoxes; index++) {

        let newBox = document.createElement("div");
        newBox.classList.add("box");  
        newBox.classList.add("box-level-" + numberOfCols);
        //6
        newBox.addEventListener("click", function (){
            this.classList.toggle("active");
        })
        boardContainer.append(newBox);
    }
   
}


