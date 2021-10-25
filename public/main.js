//Challenge - Rock, Paper, Scissors, Lizard, Spock using es6 and served by a simple node server (http module), no peaking at your past R,P,S code and push to Github.

// set up gameBoard
// create elements

const array = ["rock", "paper", "spock", "scissors", "lizard"];

const selectionButtons = document.querySelectorAll("[data-selection]");
//GLOBAL VARIABLE PUT IN CAPS
const SELECTIONS = [
  //array of all possible selections and losses

  //possible make loser array
  { name: "rock", loses: "paper", beats: ["scissors", "lizard"] },
  { name: "paper", loses: "scissors", beats: ["rock", "spock"] },
  { name: "scissors", loses: "rock", beats: ["paper", "lizard"] },
  { name: "lizard", loses: "spock", beats: ["rock", "spock"] },
  { name: "spock", loses: "rock", beats: ["paper", "lizard"] },
];

// include any functions for button INSIDE
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const randomSelection = array[Math.floor(Math.random() * array.length)];

    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    console.log(
      "I chose",
      selectionName,
      "Computer Chose",
      randomSelection,
      "I lose to",
      selection.loses,
      " I beat",
      selection.beats
    );

    //is this a draw? asking a question
    if (selectionName === randomSelection) {
      document.getElementById("outcome").innerText = "draw";
    } else {
      // below shifts to lines 12-14 to find elements of selections array

      if (selection.beats.includes(randomSelection)) {
        document.getElementById("outcome").innerText = "I won";
      } else {
        document.getElementById("outcome").innerText = "I lost";
      }
    }
  });
});

function winner(selectionName, selection) {
  result = winner(+selectionName, selection);
  score[result] += 1;
  userChoice[txt] = "You chose " + choice[+selection];
  cpuChoice[txt] = "CPU chose " + choice[selectionName];
  resultOut[txt] =
    (result !== "draw" ? "You " : "") +
    result +
    " - Score: " +
    score.win +
    " : " +
    score.lose;
}

var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
      
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp':(thumbUp -1)-1
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
  
});
