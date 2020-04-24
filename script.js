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

const points1 = document.querySelector('.points1');
const points2 = document.querySelector('.points2');
const points3 = document.querySelector('.points3');
const points4 = document.querySelector('.points4');

const buttons = document.querySelectorAll('button');
const btn15 = document.querySelector('.btn15');
const btn15sec = document.querySelector('.btn15sec');
const btn15trd = document.querySelector('.btn15trd');
const btn15four = document.querySelector('.btn15four');
const btn16 = document.querySelector('.btn16');
const btn16sec = document.querySelector('.btn16sec');
const btn16trd = document.querySelector('.btn16trd');
const btn16four = document.querySelector('.btn16four');
const btn17 = document.querySelector('.btn17');
const btn17sec = document.querySelector('.btn17sec');
const btn17trd = document.querySelector('.btn17trd');
const btn17four = document.querySelector('.btn17four');
const btn18 = document.querySelector('.btn18');
const btn18sec = document.querySelector('.btn18sec');
const btn18trd = document.querySelector('.btn18trd');
const btn18four = document.querySelector('.btn18four');
const btn19 = document.querySelector('.btn19');
const btn19sec = document.querySelector('.btn19sec');
const btn19trd = document.querySelector('.btn19trd');
const btn19four = document.querySelector('.btn19four');
const btn20 = document.querySelector('.btn20');
const btn20sec = document.querySelector('.btn20sec');
const btn20trd = document.querySelector('.btn20trd');
const btn20four = document.querySelector('.btn20four');
const btn25 = document.querySelector('.btn25');
const btn25sec = document.querySelector('.btn25sec');
const btn25trd = document.querySelector('.btn25trd');
const btn25four = document.querySelector('.btn25four');

const radio2players = document.querySelector('#select2players');
const radio3players = document.querySelector('#select3players');
const radio4players = document.querySelector('#select4players');

const displayPlayer3 = document.querySelector('.player3');
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

// BUTTON 15 FOR 1 , 2 , 3 , 4 PLAYER

btn15.addEventListener('click', () => {

  counting(player1, btn15, 0);

  addPoints(player1, player2, player3, player4, 0, 15);
});

btn15sec.addEventListener('click', () => {

  counting(player2, btn15sec, 0);

  addPoints(player2, player1, player3, player4, 0, 15);
});

btn15trd.addEventListener('click', () => {

  counting(player3, btn15trd, 0);

  addPoints(player3, player1, player2, player4, 0, 15);
});

btn15four.addEventListener('click', () => {

  counting(player4, btn15four, 0);

  addPoints(player4, player1, player2, player3, 0, 15);
});

// BUTTON 16 FOR 1 , 2 , 3 , 4 PLAYER

btn16.addEventListener('click', () => {

  counting(player1, btn16, 1);

  addPoints(player1, player2, player3, player4, 1, 16);
});

btn16sec.addEventListener('click', () => {

  counting(player2, btn16sec, 1);

  addPoints(player2, player1, player3, player4, 1, 16);
});

btn16trd.addEventListener('click', () => {

  counting(player3, btn16trd, 1);

  addPoints(player3, player1, player2, player4, 1, 16);
});

btn16four.addEventListener('click', () => {

  counting(player4, btn16four, 1);

  addPoints(player4, player1, player2, player3, 1, 16);
});

// BUTTON 17 FOR 1 , 2 , 3 , 4 PLAYER

btn17.addEventListener('click', () => {

  counting(player1, btn17, 2);

  addPoints(player1, player2, player3, player4, 2, 17);
});

btn17sec.addEventListener('click', () => {

  counting(player2, btn17sec, 2);

  addPoints(player2, player1, player3, player4, 2, 17);
});

btn17trd.addEventListener('click', () => {

  counting(player3, btn17trd, 2);

  addPoints(player3, player1, player2, player4, 2, 17);
});

btn17four.addEventListener('click', () => {

  counting(player4, btn17four, 2);

  addPoints(player4, player1, player2, player3, 2, 17);
});

// BUTTON 18 FOR 1 , 2 , 3 , 4 PLAYER

btn18.addEventListener('click', () => {

  counting(player1, btn18, 3);

  addPoints(player1, player2, player3, player4, 3, 18);
});

btn18sec.addEventListener('click', () => {

  counting(player2, btn18sec, 3);

  addPoints(player2, player1, player3, player4, 3, 18);
});

btn18trd.addEventListener('click', () => {

  counting(player3, btn18trd, 3);

  addPoints(player3, player1, player2, player4, 3, 18);
});

btn18four.addEventListener('click', () => {

  counting(player4, btn18four, 3);

  addPoints(player4, player1, player2, player3, 3, 18);
});

// BUTTON 19 FOR 1 , 2 , 3 , 4 PLAYER

btn19.addEventListener('click', () => {

  counting(player1, btn19, 4);

  addPoints(player1, player2, player3, player4, 4, 19);
});

btn19sec.addEventListener('click', () => {

  counting(player2, btn19sec, 4);

  addPoints(player2, player1, player3, player4, 4, 19);
});

btn19trd.addEventListener('click', () => {

  counting(player3, btn19trd, 4);

  addPoints(player3, player1, player2, player4, 4, 19);
});

btn19four.addEventListener('click', () => {

  counting(player4, btn19four, 4);

  addPoints(player4, player1, player2, player3, 4, 19);
});

// BUTTON 20 FOR 1 , 2 , 3 , 4 PLAYER

btn20.addEventListener('click', () => {

  counting(player1, btn20, 5);

  addPoints(player1, player2, player3, player4, 5, 20);
});

btn20sec.addEventListener('click', () => {

  counting(player2, btn20sec, 5);

  addPoints(player2, player1, player3, player4, 5, 20);
});

btn20trd.addEventListener('click', () => {

  counting(player3, btn20trd, 5);

  addPoints(player3, player1, player2, player4, 5, 20);
});

btn20four.addEventListener('click', () => {

  counting(player4, btn20four, 5);

  addPoints(player4, player1, player2, player3, 5, 20);
});

// BUTTON 25 FOR 1 , 2 , 3 , 4 PLAYER

btn25.addEventListener('click', () => {

  counting(player1, btn25, 6);

  addPoints(player1, player2, player3, player4, 6, 25);
});

btn25sec.addEventListener('click', () => {

  counting(player2, btn25sec, 6);

  addPoints(player2, player1, player3, player4, 6, 25);
});

btn25trd.addEventListener('click', () => {

  counting(player3, btn25trd, 6);

  addPoints(player3, player1, player2, player4, 6, 25);
});

btn25four.addEventListener('click', () => {

  counting(player4, btn25four, 6);

  addPoints(player4, player1, player2, player3, 6, 25);
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