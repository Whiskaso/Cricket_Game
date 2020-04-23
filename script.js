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

// BUTTON 15 FOR 1 , 2 , 3 , 4 PLAYER

btn15.addEventListener('click', () => {
  player1[0][0] += 1;

  if (player1[0][0] == 1) {
    btn15.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player1[0][0] == 2) {
    btn15.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player1[0][0] >= 3) {
    btn15.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player1[0][1] = true;
  }

  if (player1[0][0] > 3 && player2[0][1] == false) {
    player2[7][0] += 15;
  }

  if (player1[0][0] > 3 && player3[0][1] == false) {
    player3[7][0] += 15;
  }

  if (player1[0][0] > 3 && player4[0][1] == false) {
    player4[7][0] += 15;
  }
});

btn15sec.addEventListener('click', () => {
  player2[0][0] += 1;

  if (player2[0][0] == 1) {
    btn15sec.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player2[0][0] == 2) {
    btn15sec.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player2[0][0] >= 3) {
    btn15sec.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player2[0][1] = true;
  }

  if (player2[0][0] > 3 && player1[0][1] == false) {
    player1[7][0] += 15;
  }

  if (player2[0][0] > 3 && player3[0][1] == false) {
    player3[7][0] += 15;
  }

  if (player2[0][0] > 3 && player4[0][1] == false) {
    player4[7][0] += 15;
  }
});

btn15trd.addEventListener('click', () => {
  player3[0][0] += 1;

  if (player3[0][0] == 1) {
    btn15trd.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player3[0][0] == 2) {
    btn15trd.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player3[0][0] >= 3) {
    btn15trd.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player3[0][1] = true;
  }

  if (player3[0][0] > 3 && player1[0][1] == false) {
    player1[7][0] += 15;
  }

  if (player3[0][0] > 3 && player2[0][1] == false) {
    player2[7][0] += 15;
  }

  if (player3[0][0] > 3 && player4[0][1] == false) {
    player4[7][0] += 15;
  }
});

btn15four.addEventListener('click', () => {
  player4[0][0] += 1;

  if (player4[0][0] == 1) {
    btn15four.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player4[0][0] == 2) {
    btn15four.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player4[0][0] >= 3) {
    btn15four.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player4[0][1] = true;
  }

  if (player4[0][0] > 3 && player1[0][1] == false) {
    player1[7][0] += 15;
  }

  if (player4[0][0] > 3 && player2[0][1] == false) {
    player2[7][0] += 15;
  }

  if (player4[0][0] > 3 && player3[0][1] == false) {
    player3[7][0] += 15;
  }
});

// BUTTON 16 FOR 1 , 2 , 3 , 4 PLAYER

btn16.addEventListener('click', () => {
  player1[1][0] += 1;

  if (player1[1][0] == 1) {
    btn16.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player1[1][0] == 2) {
    btn16.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player1[1][0] >= 3) {
    btn16.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player1[1][1] = true;
  }

  if (player1[1][0] > 3 && player2[1][1] == false) {
    player2[7][0] += 16;
  }

  if (player1[1][0] > 3 && player3[1][1] == false) {
    player3[7][0] += 16;
  }

  if (player1[1][0] > 3 && player4[1][1] == false) {
    player4[7][0] += 16;
  }
});

btn16sec.addEventListener('click', () => {
  player2[1][0] += 1;

  if (player2[1][0] == 1) {
    btn16sec.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player2[1][0] == 2) {
    btn16sec.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player2[1][0] >= 3) {
    btn16sec.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player2[1][1] = true;
  }

  if (player2[1][0] > 3 && player1[1][1] == false) {
    player1[7][0] += 16;
  }

  if (player2[1][0] > 3 && player3[1][1] == false) {
    player3[7][0] += 16;
  }

  if (player2[1][0] > 3 && player4[1][1] == false) {
    player4[7][0] += 16;
  }
});

btn16trd.addEventListener('click', () => {
  player3[1][0] += 1;

  if (player3[1][0] == 1) {
    btn16trd.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player3[1][0] == 2) {
    btn16trd.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player3[1][0] >= 3) {
    btn16trd.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player3[1][1] = true;
  }

  if (player3[1][0] > 3 && player1[1][1] == false) {
    player1[7][0] += 16;
  }

  if (player3[1][0] > 3 && player2[1][1] == false) {
    player2[7][0] += 16;
  }

  if (player3[1][0] > 3 && player4[1][1] == false) {
    player4[7][0] += 16;
  }
});

btn16four.addEventListener('click', () => {
  player4[1][0] += 1;

  if (player4[1][0] == 1) {
    btn16four.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player4[1][0] == 2) {
    btn16four.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player4[1][0] >= 3) {
    btn16four.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player4[1][1] = true;
  }

  if (player4[1][0] > 3 && player1[1][1] == false) {
    player1[7][0] += 16;
  }

  if (player4[1][0] > 3 && player2[1][1] == false) {
    player2[7][0] += 16;
  }

  if (player4[1][0] > 3 && player3[1][1] == false) {
    player3[7][0] += 16;
  }
});

// BUTTON 17 FOR 1 , 2 , 3 , 4 PLAYER

btn17.addEventListener('click', () => {
  player1[2][0] += 1;

  if (player1[2][0] == 1) {
    btn17.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player1[2][0] == 2) {
    btn17.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player1[2][0] >= 3) {
    btn17.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player1[2][1] = true;
  }

  if (player1[2][0] > 3 && player2[2][1] == false) {
    player2[7][0] += 17;
  }

  if (player1[2][0] > 3 && player3[2][1] == false) {
    player3[7][0] += 17;
  }

  if (player1[2][0] > 3 && player4[2][1] == false) {
    player4[7][0] += 17;
  }
});

btn17sec.addEventListener('click', () => {
  player2[2][0] += 1;

  if (player2[2][0] == 1) {
    btn17sec.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player2[2][0] == 2) {
    btn17sec.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player2[2][0] >= 3) {
    btn17sec.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player2[2][1] = true;
  }

  if (player2[2][0] > 3 && player1[2][1] == false) {
    player1[7][0] += 17;
  }

  if (player2[2][0] > 3 && player3[2][1] == false) {
    player3[7][0] += 17;
  }

  if (player2[2][0] > 3 && player4[2][1] == false) {
    player4[7][0] += 17;
  }
});

btn17trd.addEventListener('click', () => {
  player3[2][0] += 1;

  if (player3[2][0] == 1) {
    btn17trd.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player3[2][0] == 2) {
    btn17trd.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player3[2][0] >= 3) {
    btn17trd.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player3[2][1] = true;
  }

  if (player3[2][0] > 3 && player1[2][1] == false) {
    player1[7][0] += 17;
  }

  if (player3[2][0] > 3 && player2[2][1] == false) {
    player2[7][0] += 17;
  }

  if (player3[2][0] > 3 && player4[2][1] == false) {
    player4[7][0] += 17;
  }
});

btn17four.addEventListener('click', () => {
  player4[2][0] += 1;

  if (player4[2][0] == 1) {
    btn17four.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player4[2][0] == 2) {
    btn17four.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player4[2][0] >= 3) {
    btn17four.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player4[2][1] = true;
  }

  if (player4[2][0] > 3 && player1[2][1] == false) {
    player1[7][0] += 17;
  }

  if (player4[2][0] > 3 && player2[2][1] == false) {
    player2[7][0] += 17;
  }

  if (player4[2][0] > 3 && player3[2][1] == false) {
    player3[7][0] += 17;
  }
});

// BUTTON 18 FOR 1 , 2 , 3 , 4 PLAYER

btn18.addEventListener('click', () => {
  player1[3][0] += 1;

  if (player1[3][0] == 1) {
    btn18.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player1[3][0] == 2) {
    btn18.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player1[3][0] >= 3) {
    btn18.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player1[3][1] = true;
  }

  if (player1[3][0] > 3 && player2[3][1] == false) {
    player2[7][0] += 18;
  }

  if (player1[3][0] > 3 && player3[3][1] == false) {
    player3[7][0] += 18;
  }

  if (player1[3][0] > 3 && player4[3][1] == false) {
    player4[7][0] += 18;
  }
});

btn18sec.addEventListener('click', () => {
  player2[3][0] += 1;

  if (player2[3][0] == 1) {
    btn18sec.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player2[3][0] == 2) {
    btn18sec.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player2[3][0] >= 3) {
    btn18sec.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player2[3][1] = true;
  }

  if (player2[3][0] > 3 && player1[3][1] == false) {
    player1[7][0] += 18;
  }

  if (player2[3][0] > 3 && player3[3][1] == false) {
    player3[7][0] += 18;
  }

  if (player2[3][0] > 3 && player4[3][1] == false) {
    player4[7][0] += 18;
  }
});

btn18trd.addEventListener('click', () => {
  player3[3][0] += 1;

  if (player3[3][0] == 1) {
    btn18trd.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player3[3][0] == 2) {
    btn18trd.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player3[3][0] >= 3) {
    btn18trd.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player3[3][1] = true;
  }

  if (player3[3][0] > 3 && player1[3][1] == false) {
    player1[7][0] += 18;
  }

  if (player3[3][0] > 3 && player2[3][1] == false) {
    player2[7][0] += 18;
  }

  if (player3[3][0] > 3 && player4[3][1] == false) {
    player4[7][0] += 18;
  }
});

btn18four.addEventListener('click', () => {
  player4[3][0] += 1;

  if (player4[3][0] == 1) {
    btn18four.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player4[3][0] == 2) {
    btn18four.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player4[3][0] >= 3) {
    btn18four.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player4[3][1] = true;
  }

  if (player4[3][0] > 3 && player1[3][1] == false) {
    player1[7][0] += 18;
  }

  if (player4[3][0] > 3 && player2[3][1] == false) {
    player2[7][0] += 18;
  }

  if (player4[3][0] > 3 && player3[3][1] == false) {
    player3[7][0] += 18;
  }
});

// BUTTON 19 FOR 1 , 2 , 3 , 4 PLAYER

btn19.addEventListener('click', () => {
  player1[4][0] += 1;

  if (player1[4][0] == 1) {
    btn19.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player1[4][0] == 2) {
    btn19.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player1[4][0] >= 3) {
    btn19.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player1[4][1] = true;
  }

  if (player1[4][0] > 3 && player2[4][1] == false) {
    player2[7][0] += 19;
  }

  if (player1[4][0] > 3 && player3[4][1] == false) {
    player3[7][0] += 19;
  }

  if (player1[4][0] > 3 && player4[4][1] == false) {
    player4[7][0] += 19;
  }
});

btn19sec.addEventListener('click', () => {
  player2[4][0] += 1;

  if (player2[4][0] == 1) {
    btn19sec.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player2[4][0] == 2) {
    btn19sec.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player2[4][0] >= 3) {
    btn19sec.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player2[4][1] = true;
  }

  if (player2[4][0] > 3 && player1[4][1] == false) {
    player1[7][0] += 19;
  }

  if (player2[4][0] > 3 && player3[4][1] == false) {
    player3[7][0] += 19;
  }

  if (player2[4][0] > 3 && player4[4][1] == false) {
    player4[7][0] += 19;
  }
});

btn19trd.addEventListener('click', () => {
  player3[4][0] += 1;

  if (player3[4][0] == 1) {
    btn19trd.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player3[4][0] == 2) {
    btn19trd.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player3[4][0] >= 3) {
    btn19trd.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player3[4][1] = true;
  }

  if (player3[4][0] > 3 && player1[4][1] == false) {
    player1[7][0] += 19;
  }

  if (player3[4][0] > 3 && player2[4][1] == false) {
    player2[7][0] += 19;
  }

  if (player3[4][0] > 3 && player4[4][1] == false) {
    player4[7][0] += 19;
  }
});

btn19four.addEventListener('click', () => {
  player4[4][0] += 1;

  if (player4[4][0] == 1) {
    btn19four.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player4[4][0] == 2) {
    btn19four.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player4[4][0] >= 3) {
    btn19four.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player4[4][1] = true;
  }

  if (player4[4][0] > 3 && player1[4][1] == false) {
    player1[7][0] += 19;
  }

  if (player4[4][0] > 3 && player2[4][1] == false) {
    player2[7][0] += 19;
  }

  if (player4[4][0] > 3 && player3[4][1] == false) {
    player3[7][0] += 19;
  }
});

// BUTTON 20 FOR 1 , 2 , 3 , 4 PLAYER

btn20.addEventListener('click', () => {
  player1[5][0] += 1;

  if (player1[5][0] == 1) {
    btn20.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player1[5][0] == 2) {
    btn20.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player1[5][0] >= 3) {
    btn20.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player1[5][1] = true;
  }

  if (player1[5][0] > 3 && player2[5][1] == false) {
    player2[7][0] += 20;
  }

  if (player1[5][0] > 3 && player3[5][1] == false) {
    player3[7][0] += 20;
  }

  if (player1[5][0] > 3 && player4[5][1] == false) {
    player4[7][0] += 20;
  }
});

btn20sec.addEventListener('click', () => {
  player2[5][0] += 1;

  if (player2[5][0] == 1) {
    btn20sec.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player2[5][0] == 2) {
    btn20sec.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player2[5][0] >= 3) {
    btn20sec.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player2[5][1] = true;
  }

  if (player2[5][0] > 3 && player1[5][1] == false) {
    player1[7][0] += 20;
  }

  if (player2[5][0] > 3 && player3[5][1] == false) {
    player3[7][0] += 20;
  }

  if (player2[5][0] > 3 && player4[5][1] == false) {
    player4[7][0] += 20;
  }
});

btn20trd.addEventListener('click', () => {
  player3[5][0] += 1;

  if (player3[5][0] == 1) {
    btn20trd.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player3[5][0] == 2) {
    btn20trd.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player3[5][0] >= 3) {
    btn20trd.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player3[5][1] = true;
  }

  if (player3[5][0] > 3 && player1[5][1] == false) {
    player1[7][0] += 20;
  }

  if (player3[5][0] > 3 && player2[5][1] == false) {
    player2[7][0] += 20;
  }

  if (player3[5][0] > 3 && player4[5][1] == false) {
    player4[7][0] += 20;
  }
});

btn20four.addEventListener('click', () => {
  player4[5][0] += 1;

  if (player4[5][0] == 1) {
    btn20four.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player4[5][0] == 2) {
    btn20four.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player4[5][0] >= 3) {
    btn20four.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player4[5][1] = true;
  }

  if (player4[5][0] > 3 && player1[5][1] == false) {
    player1[7][0] += 20;
  }

  if (player4[5][0] > 3 && player2[5][1] == false) {
    player2[7][0] += 20;
  }

  if (player4[5][0] > 3 && player3[5][1] == false) {
    player3[7][0] += 20;
  }
});

// BUTTON 25 FOR 1 , 2 , 3 , 4 PLAYER

btn25.addEventListener('click', () => {
  player1[6][0] += 1;

  if (player1[6][0] == 1) {
    btn25.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player1[6][0] == 2) {
    btn25.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player1[6][0] >= 3) {
    btn25.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player1[6][1] = true;
  }

  if (player1[6][0] > 3 && player2[6][1] == false) {
    player2[7][0] += 25;
  }

  if (player1[6][0] > 3 && player3[6][1] == false) {
    player3[7][0] += 25;
  }

  if (player1[6][0] > 3 && player4[6][1] == false) {
    player4[7][0] += 25;
  }
});

btn25sec.addEventListener('click', () => {
  player2[6][0] += 1;

  if (player2[6][0] == 1) {
    btn25sec.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player2[6][0] == 2) {
    btn25sec.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player2[6][0] >= 3) {
    btn25sec.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player2[6][1] = true;
  }

  if (player2[6][0] > 3 && player1[6][1] == false) {
    player1[7][0] += 25;
  }

  if (player2[6][0] > 3 && player3[6][1] == false) {
    player3[7][0] += 25;
  }

  if (player2[6][0] > 3 && player4[6][1] == false) {
    player4[7][0] += 25;
  }
});

btn25trd.addEventListener('click', () => {
  player3[6][0] += 1;

  if (player3[6][0] == 1) {
    btn25trd.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player3[6][0] == 2) {
    btn25trd.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player3[6][0] >= 3) {
    btn25trd.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player3[6][1] = true;
  }

  if (player3[6][0] > 3 && player1[6][1] == false) {
    player1[7][0] += 25;
  }

  if (player3[6][0] > 3 && player2[6][1] == false) {
    player2[7][0] += 25;
  }

  if (player3[6][0] > 3 && player4[6][1] == false) {
    player4[7][0] += 25;
  }
});

btn25four.addEventListener('click', () => {
  player4[6][0] += 1;

  if (player4[6][0] == 1) {
    btn25four.style.backgroundColor = 'rgba(43, 165, 43, .9)';
  } else if (player4[6][0] == 2) {
    btn25four.style.backgroundColor = 'rgba(255, 166, 0, .9)';
  } else if (player4[6][0] >= 3) {
    btn25four.style.backgroundColor = 'rgba(31, 31, 31, .6)';
    player4[6][1] = true;
  }

  if (player4[6][0] > 3 && player1[6][1] == false) {
    player1[7][0] += 25;
  }

  if (player4[6][0] > 3 && player2[6][1] == false) {
    player2[7][0] += 25;
  }

  if (player4[6][0] > 3 && player3[6][1] == false) {
    player3[7][0] += 25;
  }
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