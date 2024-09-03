function roll(){
    
let p1=Math.random()*6;
let p2=Math.random()*6;
p1=Math.floor(p1);
p2=Math.floor(p2);

const diceArr=[
                'images/dice1.png',
                'images/dice2.png',
                'images/dice3.png',
                'images/dice4.png',
                'images/dice5.png',
                'images/dice6.png'

            ]
let dice1=document.querySelector(".img1");
let dice2=document.querySelector(".img2");

dice1.src=diceArr[p1];
dice2.src=diceArr[p2];
let winner=document.querySelector(".result");
if(p1>p2)
    winner.innerHTML="Player 1 Wins!";
else if(p2>p1)
    winner.innerHTML="Player 2 Wins!";
else
    winner.innerHTML="Draw!";

}
let audio;
function playSound(){
 let btn=document.querySelector(".btn");
 btn.addEventListener("click",function(){
    if(audio)
    {
        audio.pause();
        audio.currentTime=0;
    }

    audio=new Audio('sound/dice-142528.mp3');
    audio.play();
});
}

