const game_controler = document.getElementById("game-controller");
let sequence = [];
let score = 0;
let count = 0;
const divs = ["red", "blue", "green", "yellow"];


game_controler.addEventListener("click", () => {
    console.log(game_controler.innerText);
        if(game_controler.innerText = "Start Game"){
          start_game();
        }
})

const start_game = () => {
    document.getElementById("score").innerText = "";
    game_controler.innerText = "Reset Game";
    const rand_idx = Math.floor(Math.random()*4);
    console.log(rand_idx);
   const div_id = divs[rand_idx];
   const div= document.getElementById(div_id);
    const name = "div" + (rand_idx)
  // Reset animation
  div.style.animationName = ""; 
  void div.offsetWidth; // Force reflow
  div.style.animationName = name;
  div.style.animationDuration = "1s";
    sequence.push(div_id);
}

const cards = document.getElementsByClassName("card");



for(let i = 0; i < cards.length; i++){
    let card =  cards[i];
    card.addEventListener("click", () => {
        console.log(sequence);
        const card_id = card.id;
        if(sequence[count] == card.id && count == sequence.length-1){
            score++;
            count = 0;
            start_game();
        }
        else if(sequence[count] == card.id){
            count++;
        }
        else{
            game_over();

        }
    })
}

const game_over = () => {
    console.log("Your score is ", score);
    document.getElementById("score").innerText = "Game Over! Score is " + score;
    document.getElementById("score").style.color = "blue"
    sequence = [];
    score = 0;
    game_controler.innerText = "Start Game"

}

