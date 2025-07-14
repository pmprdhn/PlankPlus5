const params = new URLSearchParams(window.location.search);
const mins = parseInt(params.get("mins")) || 0;
const secs = parseInt(params.get("secs")) || 0;
let i=10;

const totalTime= ((mins*60)+secs)+5;
const halfway= (totalTime*1000)/2;
const pr= (mins*60)+secs;
let timer = totalTime*1000;

const audio = new Audio("../sound/beep.mp3");
const endAudio = new Audio("../sound/end.mp3");



function countdown(){

  document.getElementById("countdown").textContent=`Starting in ${i}`;
  


  if (i>0){
    document.getElementById("stopwatch").textContent=`${mins.toString().padStart(2,0)}:${(secs+5).toString().padStart(2,0)}`;
    i--;
    setTimeout(countdown,1000);
  }
  else{
     document.getElementById("countdown").textContent=``;


    if (timer>0){

      if(timer>halfway){
          document.getElementById("message").textContent='THIS IS TOO EASY FOR YOU!!';
      }
      else if (timer<10000){
        document.getElementById("message").style.color="red";
        document.getElementById("message").textContent=`DONT GIVE UP! LAST ${timer/1000} secs!`;
        audio.play();

      }
      else{
          document.getElementById("message").textContent='KEEP GOING ! WE BELIEVE IN YOU!!';
      }
      document.getElementById("stopwatch").style.fontSize="100px";

     
    
  
        let displaySeconds = (Math.floor(timer/1000)%60).toString().padStart(2,0);
        let displayMins = (Math.floor(timer/60000)%60).toString().padStart(2,0);
        

        timer=timer-1000;
        setTimeout(countdown,1000);

        document.getElementById("stopwatch").textContent=`${displayMins}:${displaySeconds}`; 

    }
    else{
      endAudio.play();
      document.getElementById("message").textContent='YOU DID IT! I KNEW YOU COULD DO THIS!';
      document.getElementById("stopwatch").textContent=`00:00`; 

      document.getElementById("labelForRestart").style.visibility="visible";
      document.getElementById("restart").style.visibility="visible";
      document.getElementById("labelForNewPR").style.visibility="visible";
      document.getElementById("newPR").style.visibility="visible";





    }

   
}

}



countdown();



console.log(mins);
console.log(secs);
