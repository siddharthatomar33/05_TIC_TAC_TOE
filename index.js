const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info")
const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//let create a function to initialise the game
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];  //shuru may grid khali rahegi
    newGameBtn.classList.remove("active");  //newgame a button ko tbhi lao jbb need ho
    gameInfo.innerText=`Current Player -${currentPlayer}`;   //put value of cuuent player
}

initGame();

boxes.forEach((box,index) =>{ //har box ke liye niche wali propertyuse hogi
    box.addEventListener("click",()=>{
        handleClick(index);
    })
    
});