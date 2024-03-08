

const target = document.querySelector("button.jumper")
const hitCountr = document.querySelector(".h-score")
const missCountr = document.querySelector(".m-score")
const accuracySection = document.querySelector(".accuracy")




let hit=0;
let miss=0;
let gameStarted = 0;
let accuracy = 0;



window.addEventListener("click", e=>{
   
    //    target mover
    targetMover(e);

    // Score update
    scoreUpdater();
    
    // accuracy update
    accuracyCounter();

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
//    target mover
targetMover = (e) =>{
    
    if(e.target.classList.contains("jumper")){
        target.style.top= `${Math.round(Math.random() * 60+30)}%`;
        target.style.left= `${Math.round(Math.random() * 80+10)}%`;
        hit++;
    }else{
        miss++;
    }
}


// timer
startCounter = setInterval(()=>{





}, 1000)


