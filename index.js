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

function swapTurn(){  //swap wala function
    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer="X";
    }
    //UI update
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}

function checkGameOver(){

}

function handleClick(index){
    if(gameGrid[index]===""){   //agar current index ki value empty hai tbhi further aage kaam hoga 
       boxes[index].innerText=currentPlayer;    //box ke andar X ya O aagya,UI prr update
       gameGrid[index]=currentPlayer;   // inner logical ko update kia
       boxes[index].style.pointerEvents="none";   //jaha prr already value h waha cursor pointer nhi banega 
       //swap karo turn ko
       swapTurn();
       //check koi jeeta toh ni
       checkGameOver();
    }
}


boxes.forEach((box,index) =>{ //har box ke liye niche wali propertyuse hogi
    box.addEventListener("click",()=>{
        handleClick(index);
    })
    
});

