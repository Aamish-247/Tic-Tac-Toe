let boxes = document.querySelectorAll('.box');
let restart = document.querySelector('.restart');
let game = document.querySelector('.game');
let winners = document.querySelector('.winners');
let message = document.querySelector('.message');
let hide = document.querySelector('.hide');
let newGame = document.querySelector('.newGame');

let turno = true;

let winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach(box => {
    box.addEventListener('click', ()=>{
        if(turno==true){
            box.innerText = "O";
            box.style.color = "rgb(7, 110, 20)";
            turno = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "rgb(201, 8, 8)";
            turno = true;
        }  
        box.disabled = true;
        checkWinner();
    })
})

const showWinner = (a)=>{
    winners.classList.add("winners");
    winners.innerText = `Congratulations! ${a} won the game`;
    winners.classList.remove("hide");
    newGame.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = ()=>{
    boxes.forEach(box => {
        box.disabled = true;
    })
}

const enableBoxes = ()=>{
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    })
}

const restartGame = ()=>{
        enableBoxes();
        winners .classList.add("hide");
        winners.classList.remove("winners");
        newGame.classList.add("hide");
        turno = true;
}

let count = 0;

const draw = ()=>{
    let isDraw = true;
    for(count = 0 ; count < 9 ; count++){
        if(boxes[count].innerText === ""){
            isDraw = false;
            break;
        }
    }
    if(isDraw == true){
        winners.classList.add("winners");
        winners.innerText = "Sorry, Game Draw";
        newGame.classList.remove("hide");
        winners.classList.remove("hide");
    }
}


const checkWinner= ()=>{
    for(let pattern of winner){
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        if(a !== "" && b !== "" && c !==""){
            if(a===b && b===c){
                showWinner(a);
                boxes.disabled = true;
            }  
        }
    }

    draw();
}

restart.addEventListener('click', restartGame);
newGame.addEventListener('click', restartGame);