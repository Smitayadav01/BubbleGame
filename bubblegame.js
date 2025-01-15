alert("The game is such that whichever new number of hit comes, you have to click on the bubble of that number and the score will increase by 10. And if you click on the wrong number on the bubble, the value of the score will not increase and after the time is over the total score will be printed Thank you!!")



function makebubble(){
    var clutter="";

    for(var i=1;i<=160;i++){
        var rn = Math.floor(Math.random()*10)
        clutter+=`<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}


var timer=60;
function runtime(){
var  timerint=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=` <h1>Game Over!!</h1>
        <h1>final score =${score}</h1>`;
       
    }
},1000)
}


var hitrn=0;
function getnewhit(){
     hitrn=Math.floor(Math.random()*10);
     document.querySelector("#hit").textContent=hitrn;
}


var score=0;
function increasescore(){
     score+=10;
     document.querySelector("#score").textContent=score;
}


document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clicknum=Number(dets.target.textContent);
    if(clicknum===hitrn){
        increasescore();
        makebubble();
        getnewhit();
    }
})

makebubble();
runtime();
getnewhit();
