

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



window.addEventListener("click", e=>{
   
    //    score Calculator
    scoreCalculator(e);

    // Score update
    scoreUpdater();
    
    // accuracy update
    accuracyCounter();

    if(gameStarted==0){
        moveTargetRandomly();
    }

})


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
scoreCalculator = (e) =>{
    
    if(e.target.classList.contains("jumper")){
        hit++;
    }else{
        miss++;
    }
}


// timer
// startCounter = setInterval(()=>{

//     if(gameStarted){
        
//     }



// }, 1000)


moveTargetRandomly =()=>{  

    let stopmoving = setInterval(()=>{
        
        gameStarted = 1;
        target.style.top= `${Math.round(Math.random() * 60+30)}%`;
        target.style.left= `${Math.round(Math.random() * 80+10)}%`;
        console.log("moving")
        
        if(time==10){
            clearInterval(stopmoving);
            console.log("moving stoped")
            // gameStarted = 0;
            console.log("g")
        }

        time++;
    }, 1000)
}


