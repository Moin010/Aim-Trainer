

const target = document.querySelector("button.jumper")
const hitCountr = document.querySelector(".h-score")
const missCountr = document.querySelector(".m-score")
const accuracySection = document.querySelector(".accuracy")
// const startButton = document.querySelector(".startGameNow")




let hit=0;
let miss=0;
let gameStarted = 0;
let accuracy = 0;
let time =1;
let stopmoving ;
let gameMode = 1000;



window.addEventListener("click", e=>{
    //set game mode 
    setGameMode(e);
    
    //    score Calculator
    if(gameStarted>0){
        scoreCalculator(e);
    }

    // Score update
    scoreUpdater();
    
    // accuracy update
    accuracyCounter();


    // Start moving the target
    if(gameStarted==0){
        
        if(e.target.classList.contains("startGameNow")){
            moveTargetRandomly();
            hit=0;
            miss=0;
            scoreUpdater();
        }
        
    }

    // restart game
    if(e.target.classList.contains("reStartGameNow")){

        reStartGame();

    }

})


// setting game mode
setGameMode = (e) => {

    if(e.target.classList.contains("easy-button")){
        gameMode = 1500;
    }
    if(e.target.classList.contains("medium-button")){
        gameMode = 1000;
    }
    if(e.target.classList.contains("hard-button")){
        gameMode = 500;
    }

}


// accuracy Counter
accuracyCounter = ()=>{
    accuracy = Math.round((hit/(hit+miss))*100);
    
    accuracySection.innerHTML = `<i class="fa-solid fa-crosshairs"></i> Accuracy : ${accuracy}% `
} ;

// score updater
scoreUpdater = () =>{
    
    hitCountr.innerHTML = `<i class="fa-solid fa-person-military-rifle"></i>HIT : ${hit} `
    missCountr.innerHTML = `<i class="fa-solid fa-person-military-rifle"></i>MISS : ${miss} `
}

//    score Calculator
if(gameStarted>=0){
        
    scoreCalculator = (e) =>{
    
        if(e.target.classList.contains("jumper")){
            hit++;
            console.log(`hit: ${hit}`);
        }else{
            miss++;
            console.log(`miss: ${miss}`);
        }
    }
    
}

// restart Game
reStartGame = () =>{

    time=0;
    gameStarted = 0;
    clearInterval(stopmoving);
    target.style.top= "50%";
    target.style.left= "50%";
    console.log("restarted")
    console.log(`hit: ${hit}`);
    console.log(`miss: ${miss}`);      
    scoreUpdater();

}


moveTargetRandomly =()=>{  

    stopmoving = setInterval(()=>{
        
        
        gameStarted = 1;
        target.style.top= `${Math.round(Math.random() * 60+30)}%`;
        target.style.left= `${Math.round(Math.random() * 80+10)}%`;
        console.log("moving")
        
        if(time==10){
            reStartGame();
            console.log("moving stoped");
            
        }

        time++;
    }, gameMode)
}


