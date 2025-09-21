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
    //UI prr empty karna hoga
    boxes.forEach((box,index)=>{
        box.innerText="";    //empty all boxes
         boxes[index].style.pointerEvents="all";  // all cursor pointer are normal 

    });
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
    let answer="";    //starting may empty
    
    winningPositions.forEach((position)=>{
        //all 3 boxes should not have empty value & but have same values
        if((gameGrid[position[0]] !==""|| gameGrid[position][1] !=="" || gameGrid[position][2] !=="")
           &&(gameGrid[position][0] ===gameGrid[position][1]) && (gameGrid[position][1] ===gameGrid[position][2])){
           
            //check winner is x
            if(gameGrid[position[0]]==="X"){
                 answer="X";
            }  
            else{
                answer="O";
            }
            //now we know X/O is a winner (bg color)
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

        }    
    })

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

newGameBtn.addEventListener("click",initGame); // reset all the game from the beginning