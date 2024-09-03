var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomnumber=Math.floor(Math.random()*10)+1
var totalscore=10

function check(){
    var enterednumber=guessnumber.value
    
    if(randomnumber==enterednumber){
          result.textContent="Right"
          alert("You Won")
          randomnumber=Math.floor(Math.random()*10)+1
          if(totalscore==10){
            score.textContent="Score:"+totalscore

          }
          else if(totalscore<10){
            totalscore=totalscore+1
            score.textContent="Score:"+totalscore
          }
    }
    else{
          result.textContent="Wrong"
          result.style.color="red"
          totalscore=totalscore-1
        score.textContent="Score:"+totalscore
        randomnumber=Math.floor(Math.random()*10)+1
            if(totalscore==0){
                alert("Game Over")
                totalscore=10
                score.textContent="Score:"+totalscore
            }

    }

    console.log(randomnumber)
}