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

const points1 = document.querySelector('.points1');
const points2 = document.querySelector('.points2');

const buttons = document.querySelectorAll('button');
const btn15 = document.querySelector('.btn15');
const btn15sec = document.querySelector('.btn15sec');
const btn16 = document.querySelector('.btn16');
const btn16sec = document.querySelector('.btn16sec');

// BUTTON 15 FOR 1 AND 2 PLAYER 

btn15.addEventListener('click', () => {
  player1[0][0] += 1;

  if (player1[0][0] == 1) {
    btn15.style.backgroundColor = 'green';
  } else if (player1[0][0] == 2) {
    btn15.style.backgroundColor = 'orange';
  } else if (player1[0][0] >= 3) {
    btn15.style.backgroundColor = 'red';
  }

  if (player1[0][0] >= 4 && player2[0][0] < 3) {
    player2[7][0] += 15;
  }
});

btn15sec.addEventListener('click', () => {
  player2[0][0] += 1;

  if (player2[0][0] == 1) {
    btn15sec.style.backgroundColor = 'green';
  } else if (player2[0][0] == 2) {
    btn15sec.style.backgroundColor = 'orange';
  } else if (player2[0][0] >= 3) {
    btn15sec.style.backgroundColor = 'red';
  }

  if (player2[0][0] >= 4 && player1[0][0] < 3) {
    player1[7][0] += 15;
  }
});

// BUTTON 16 FOR 1 AND 2 PLAYER 

btn16.addEventListener('click', () => {
  player1[1][0] += 1;

  if (player1[1][0] == 1) {
    btn16.style.backgroundColor = 'green';
  } else if (player1[1][0] == 2) {
    btn16.style.backgroundColor = 'orange';
  } else if (player1[1][0] >= 3) {
    btn16.style.backgroundColor = 'red';
  }

  if (player1[1][0] >= 4 && player2[1][0] < 3) {
    player2[7][0] += 16;
  }
});

btn16sec.addEventListener('click', () => {
  player2[1][0] += 1;

  if (player2[1][0] == 1) {
    btn16sec.style.backgroundColor = 'green';
  } else if (player2[1][0] == 2) {
    btn16sec.style.backgroundColor = 'orange';
  } else if (player2[1][0] >= 3) {
    btn16sec.style.backgroundColor = 'red';
  }

  if (player2[1][0] >= 4 && player1[1][0] < 3) {
    player1[7][0] += 16;
  }
});




// ACTUALIZATION SCORE POINTS AND CHECKING IF SOMEONE WIN

function actualization() {
  points1.textContent = player1[7][0];
  points2.textContent = player2[7][0];
}