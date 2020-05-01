let player1 = [
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0]
];

let player2 = [
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0]
];

let player3 = [
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0]
];

let player4 = [
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0, false],
  [0]
];

const points1 = document.querySelector('.points1'); // PLACES WHEN PLAYER POINTS ARE DISPLAYED
const points2 = document.querySelector('.points2');
const points3 = document.querySelector('.points3');
const points4 = document.querySelector('.points4');

const buttons = [...document.querySelectorAll('button')]; // ALL BUTTONS AND TRANSFORMING TO ARRAY 

const radio2players = document.querySelector('#select2players'); // RADIO BUTTONS FOR CHANGING NUMBER OF PLAYERS
const radio3players = document.querySelector('#select3players');
const radio4players = document.querySelector('#select4players');

const displayPlayer3 = document.querySelector('.player3'); // FOR HIDING AND SHOWING PLAYER 3 AND 4  
const displayPlayer4 = document.querySelector('.player4');


// CHANGEING NUMBER OF PLAYERS 

radio2players.addEventListener('click', () => {
  displayPlayer3.style.display = 'none';
  displayPlayer4.style.display = 'none';
})

radio3players.addEventListener('click', () => {
  displayPlayer3.style.display = 'flex';
  displayPlayer4.style.display = 'none';
})

radio4players.addEventListener('click', () => {
  displayPlayer3.style.display = 'flex';
  displayPlayer4.style.display = 'flex';
})

// FUNCTION FOR COUNTING HOW MANY TIMES PLAYER SHOOT IN THE FIELD 
// indexNumber is a number field in player[i] array (0 = 15 , 1 = 16...)

function counting(player, button, indexNumber) {

  player[indexNumber][0] += 1;

  if (player[indexNumber][0] == 1) {
    button.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player[indexNumber][0] == 2) {
    button.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player[indexNumber][0] >= 3) {
    button.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player[indexNumber][1] = true;
  }
}

// FUNCTION FOR ADDING POINTS TO PLAYER 
// fnc is checking if other players have closed fields if yes then adding points 
// indexNumber is a number field in player[i] array (0 = 15 , 1 = 16...)

function addPoints(mainplayer, secplayer, trdplayer, fourplayer, indexNumber, pointsToAdd) {

  if (mainplayer[indexNumber][0] > 3 && secplayer[indexNumber][1] == false) {
    secplayer[7][0] += pointsToAdd;
  }

  if (mainplayer[indexNumber][0] > 3 && trdplayer[indexNumber][1] == false) {
    trdplayer[7][0] += pointsToAdd;
  }

  if (mainplayer[indexNumber][0] > 3 && fourplayer[indexNumber][1] == false) {
    fourplayer[7][0] += pointsToAdd;
  }
}

// EVENT LISTENER FOR EACH BUTTON 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttonField = button.dataset.field;
    player = button.dataset.player;
    index = buttonField - 15;
    if (buttonField == 25) {
      index = 6;
    }

    if (player == "p1") {

      counting(player1, button, index);

      addPoints(player1, player2, player3, player4, index, +buttonField);

    } else if (player == "p2") {

      counting(player2, button, index);

      addPoints(player2, player1, player3, player4, index, +buttonField);

    } else if (player == "p3") {

      counting(player3, button, index);

      addPoints(player3, player1, player2, player4, index, +buttonField);

    } else if (player == "p4") {

      counting(player3, button, index);

      addPoints(player3, player1, player2, player4, index, +buttonField);

    }
  })
});


// ACTUALIZATION SCORE POINTS AND CHECKING IF SOMEONE WIN

function actualization() {
  setTimeout(() => {
    points1.textContent = player1[7][0];
    points2.textContent = player2[7][0];
    points3.textContent = player3[7][0];
    points4.textContent = player4[7][0];

    if (player1[0][1] == true && player1[1][1] == true && player1[2][1] == true && player1[3][1] == true && player1[4][1] == true && player1[5][1] == true && player1[6][1] == true && player1[7][0] < player2[7][0] && player1[7][0] < player3[7][0] && player1[7][0] < player4[7][0]) {
      alert('Player 1 win !');
    }

    if (player2[0][1] == true && player2[1][1] == true && player2[2][1] == true && player2[3][1] == true && player2[4][1] == true && player2[5][1] == true && player2[6][1] == true && player2[7][0] < player1[7][0] && player2[7][0] < player3[7][0] && player2[7][0] < player4[7][0]) {
      alert('Player 2 win !');
    }

    if (player3[0][1] == true && player3[1][1] == true && player3[2][1] == true && player3[3][1] == true && player3[4][1] == true && player3[5][1] == true && player3[6][1] == true && player3[7][0] < player1[7][0] && player3[7][0] < player2[7][0] && player3[7][0] < player4[7][0]) {
      alert('Player 2 win !');
    }

    if (player4[0][1] == true && player4[1][1] == true && player4[2][1] == true && player4[3][1] == true && player4[4][1] == true && player4[5][1] == true && player4[6][1] == true && player4[7][0] < player1[7][0] && player4[7][0] < player3[7][0] && player4[7][0] < player2[7][0]) {
      alert('Player 2 win !');
    }

  }, 300);
}