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
const btn17 = document.querySelector('.btn17');
const btn17sec = document.querySelector('.btn17sec');
const btn18 = document.querySelector('.btn18');
const btn18sec = document.querySelector('.btn18sec');
const btn19 = document.querySelector('.btn19');
const btn19sec = document.querySelector('.btn19sec');
const btn20 = document.querySelector('.btn20');
const btn20sec = document.querySelector('.btn20sec');
const btn25 = document.querySelector('.btn25');
const btn25sec = document.querySelector('.btn25sec');

// BUTTON 15 FOR 1 AND 2 PLAYER 

btn15.addEventListener('click', () => {
  player1[0][0] += 1;

  if (player1[0][0] == 1) {
    btn15.style.backgroundColor = 'green';
  } else if (player1[0][0] == 2) {
    btn15.style.backgroundColor = 'orange';
  } else if (player1[0][0] >= 3) {
    btn15.style.backgroundColor = 'red';
    player1[0][1] = true;
  }

  if (player1[0][0] > 3 && player2[0][1] == false) {
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
    player2[0][1] = true;
  }

  if (player2[0][0] > 3 && player1[0][1] == false) {
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
    player1[1][1] = true;
  }

  if (player1[1][0] > 3 && player2[1][1] == false) {
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
    player2[1][1] = true;
  }

  if (player2[1][0] > 3 && player1[1][1] == false) {
    player1[7][0] += 16;
  }
});

// BUTTON 17 FOR 1 AND 2 PLAYER 

btn17.addEventListener('click', () => {
  player1[2][0] += 1;

  if (player1[2][0] == 1) {
    btn17.style.backgroundColor = 'green';
  } else if (player1[2][0] == 2) {
    btn17.style.backgroundColor = 'orange';
  } else if (player1[2][0] >= 3) {
    btn17.style.backgroundColor = 'red';
    player1[2][1] = true;
  }

  if (player1[2][0] > 3 && player2[2][1] == false) {
    player2[7][0] += 17;
  }
});

btn17sec.addEventListener('click', () => {
  player2[2][0] += 1;

  if (player2[2][0] == 1) {
    btn17sec.style.backgroundColor = 'green';
  } else if (player2[2][0] == 2) {
    btn17sec.style.backgroundColor = 'orange';
  } else if (player2[2][0] >= 3) {
    btn17sec.style.backgroundColor = 'red';
    player2[2][1] = true;
  }

  if (player2[2][0] > 3 && player1[2][1] == false) {
    player1[7][0] += 17;
  }
});

// BUTTON 18 FOR 1 AND 2 PLAYER 

btn18.addEventListener('click', () => {
  player1[3][0] += 1;

  if (player1[3][0] == 1) {
    btn18.style.backgroundColor = 'green';
  } else if (player1[3][0] == 2) {
    btn18.style.backgroundColor = 'orange';
  } else if (player1[3][0] >= 3) {
    btn18.style.backgroundColor = 'red';
    player1[3][1] = true;
  }

  if (player1[3][0] > 3 && player2[3][1] == false) {
    player2[7][0] += 18;
  }
});

btn18sec.addEventListener('click', () => {
  player2[3][0] += 1;

  if (player2[3][0] == 1) {
    btn18sec.style.backgroundColor = 'green';
  } else if (player2[3][0] == 2) {
    btn18sec.style.backgroundColor = 'orange';
  } else if (player2[3][0] >= 3) {
    btn18sec.style.backgroundColor = 'red';
    player2[3][1] = true;
  }

  if (player2[3][0] > 3 && player1[3][1] == false) {
    player1[7][0] += 18;
  }
});

// BUTTON 19 FOR 1 AND 2 PLAYER 

btn19.addEventListener('click', () => {
  player1[4][0] += 1;

  if (player1[4][0] == 1) {
    btn19.style.backgroundColor = 'green';
  } else if (player1[4][0] == 2) {
    btn19.style.backgroundColor = 'orange';
  } else if (player1[4][0] >= 3) {
    btn19.style.backgroundColor = 'red';
    player1[4][1] = true;
  }

  if (player1[4][0] > 3 && player2[4][1] == false) {
    player2[7][0] += 19;
  }
});

btn19sec.addEventListener('click', () => {
  player2[4][0] += 1;

  if (player2[4][0] == 1) {
    btn19sec.style.backgroundColor = 'green';
  } else if (player2[4][0] == 2) {
    btn19sec.style.backgroundColor = 'orange';
  } else if (player2[4][0] >= 3) {
    btn19sec.style.backgroundColor = 'red';
    player2[4][1] = true;
  }

  if (player2[4][0] > 3 && player1[4][1] == false) {
    player1[7][0] += 19;
  }
});

// BUTTON 20 FOR 1 AND 2 PLAYER 

btn20.addEventListener('click', () => {
  player1[5][0] += 1;

  if (player1[5][0] == 1) {
    btn20.style.backgroundColor = 'green';
  } else if (player1[5][0] == 2) {
    btn20.style.backgroundColor = 'orange';
  } else if (player1[5][0] >= 3) {
    btn20.style.backgroundColor = 'red';
    player1[5][1] = true;
  }

  if (player1[5][0] > 3 && player2[5][1] == false) {
    player2[7][0] += 20;
  }
});

btn20sec.addEventListener('click', () => {
  player2[5][0] += 1;

  if (player2[5][0] == 1) {
    btn20sec.style.backgroundColor = 'green';
  } else if (player2[5][0] == 2) {
    btn20sec.style.backgroundColor = 'orange';
  } else if (player2[5][0] >= 3) {
    btn20sec.style.backgroundColor = 'red';
    player2[5][1] = true;
  }

  if (player2[5][0] > 3 && player1[5][1] == false) {
    player1[7][0] += 20;
  }
});


// BUTTON 25 FOR 1 AND 2 PLAYER 

btn25.addEventListener('click', () => {
  player1[6][0] += 1;

  if (player1[6][0] == 1) {
    btn25.style.backgroundColor = 'green';
  } else if (player1[6][0] == 2) {
    btn25.style.backgroundColor = 'orange';
  } else if (player1[6][0] >= 3) {
    btn25.style.backgroundColor = 'red';
    player1[6][1] = true;
  }

  if (player1[6][0] > 3 && player2[6][1] == false) {
    player2[7][0] += 25;
  }
});

btn25sec.addEventListener('click', () => {
  player2[6][0] += 1;

  if (player2[6][0] == 1) {
    btn25sec.style.backgroundColor = 'green';
  } else if (player2[6][0] == 2) {
    btn25sec.style.backgroundColor = 'orange';
  } else if (player2[6][0] >= 3) {
    btn25sec.style.backgroundColor = 'red';
    player2[6][1] = true;
  }

  if (player2[6][0] > 3 && player1[6][1] == false) {
    player1[7][0] += 25;
  }
});

// ACTUALIZATION SCORE POINTS AND CHECKING IF SOMEONE WIN


function actualization() {
  setTimeout(() => {
    points1.textContent = player1[7][0];
    points2.textContent = player2[7][0];
  }, 300);
}