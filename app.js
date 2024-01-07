// In this section we the Javascript code for simmon says game:-
let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("Game started");
        started = true;

        levelup();
    }
}); 

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    },250);
}



function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level up ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
};

function checkbtn(idx) {
    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkbtn(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnpress);
};

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
