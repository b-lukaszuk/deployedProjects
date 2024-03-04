///////////////////////////////////////////////////////////////////////////////
//                              global variables                             //
///////////////////////////////////////////////////////////////////////////////
let text1 = '$ whoami';
let text1Substrings = getSubstringsOfLenFrom1toN(text1);
let text2 = 'Bartek Lukaszuk';
let text3 = '$ ';
let cursor = '&#9646;';
let i = 0;
let loopId = 0;

let deployedProjects = [
  [
    'Digital and Analogue Clock',
    'https://github.com/b-lukaszuk/fed_zegar_cyfr_analog',
    '/deployedProjects/clockDigiAnalog/clock.html',
  ],
  [
    'Pomodoro Timer',
    'https://github.com/b-lukaszuk/pomodoro_timer',
    'https://b-lukaszuk.github.io/pomodoro_timer/',
  ],
  [
    'Movie Tiles',
    'https://github.com/b-lukaszuk/podst_js_zadanie_zaliczeniowe',
    '/deployedProjects/moviesTiles/moviesTiles.html',
  ],
  [
    '15 puzzle game',
    'https://github.com/b-lukaszuk/fifteen_puzzle_game',
    'https://b-lukaszuk.github.io/fifteen_puzzle_game/',
  ],
  [
    'Units converter',
    'https://github.com/b-lukaszuk/simple_converter',
    'https://b-lukaszuk.github.io/simple_converter/',
  ],
  [
    'Snake game',
    'https://github.com/b-lukaszuk/snake_game',
    'https://b-lukaszuk.github.io/snake_game/',
  ],
  [
    'Simple Todos App',
    'https://github.com/b-lukaszuk/PB_reactjs_2020_2021/tree/master/sem2_zaliczenie',
    'https://b-lukaszuk.github.io/todosApp/#/',
  ],
  [
    'Simplified Chess',
    'https://github.com/b-lukaszuk/PB_JSD_2020_2021/tree/master/s2z3_10_04_2021/02/browser_version',
    'https://b-lukaszuk.github.io/simplifiedChess/',
  ],
  [
    'Memory 1',
    'https://github.com/b-lukaszuk/PB_JSD_2020_2021/blob/master/s2z4_24_04_2021/01',
    'https://b-lukaszuk.github.io/memory1/',
  ],
  [
    'Memory game',
    'https://github.com/b-lukaszuk/memory2',
    'https://b-lukaszuk.github.io/memory2/#/',
  ],
  [
    'Simple Connection Builder-Tester',
    'https://github.com/b-lukaszuk/PB_JSD_2020_2021/tree/master/s2z5_07_05_2021/01/',
    'https://b-lukaszuk.github.io/simpleConnectionTester/',
  ],
  [
    'Bouncing Ball 1',
    'https://github.com/b-lukaszuk/PB_JSD_2020_2021/tree/master/s2z3_10_04_2021/03',
    'https://b-lukaszuk.github.io/bouncingBall1/',
  ],
  [
    'Bouncing Ball 2',
    'https://github.com/b-lukaszuk/PB_JSD_2020_2021/tree/master/s2z4_24_04_2021/02',
    'https://b-lukaszuk.github.io/bouncingBall2/',
  ],
  [
    'Book: RJ_BS',
    'https://github.com/b-lukaszuk/RJ_BS_eng',
    'https://b-lukaszuk.github.io/RJ_BS_eng/',
  ],
  [
    'Game Of Life',
    'https://github.com/b-lukaszuk/PB_JSD_2020_2021/tree/master/s2z5_07_05_2021/02',
    'https://b-lukaszuk.github.io/gameOfLife/',
  ],
];

let displayedProjects = [...deployedProjects];

///////////////////////////////////////////////////////////////////////////////
//                                 functions                                 //
///////////////////////////////////////////////////////////////////////////////

/*
div class="bash" functionality
*/

// returns arrays of substrings of lenghts from x to n
// from left, e.g "ala" -> ["a", "al", "ala"]
function getSubstringsOfLenFrom1toN(text, startInd = 2) {
  let result = [];
  for (let i = startInd; i <= text.length; i++) {
    result.push(text.slice(0, i));
  }
  return result;
}

// returns random integer from a range
// minIncl and maxExcl - are both integers >= 0 && maxExcl > minIncl
function randInt(minIncl, maxExcl) {
  return Math.floor(Math.random() * (maxExcl - minIncl)) + minIncl;
}

function putTextInHtmlEltOfId(id, text) {
  let elt = document.getElementById(id);
  elt.innerHTML = text;
}

function loop() {
  let delay = randInt(180, 251);
  if (i >= text1Substrings.length) {
    clearTimeout(loopId);
    putTextInHtmlEltOfId('text1', text1);
    putTextInHtmlEltOfId('text2', text2);
    putTextInHtmlEltOfId('text3', text3 + cursor);
    return undefined; // end recursion
  }
  if (i < text1Substrings.length) {
    putTextInHtmlEltOfId('text1', text1Substrings[i] + cursor);
    i++;
  }
  loopId = setTimeout(loop, delay);
}

/*
list of deployedProjects functionality
*/

function getHyperLink(displayedText, http) {
  return '<a href="' + http + '">' + displayedText + '</a>';
}

function getH2(displayedText) {
  return '<h2>' + displayedText + '</h2>';
}

function getSpanSep() {
  return '<span> | </span>';
}

function getLi(h2Text, ghRepoHttp, deployedVersionHttp) {
  return (
    '<li>' +
    getH2(h2Text) +
    getHyperLink('See code', ghRepoHttp) +
    getSpanSep() +
    getHyperLink('See app online', deployedVersionHttp) +
    '</li>'
  );
}

// lstOfDeployedProjects is a list of lists
// each sublist contains 3 elts: name, https github, https online
function getUl(lstOfDeployedProjects) {
  let content = '';
  lstOfDeployedProjects.forEach((p) => {
    content += getLi(p[0], p[1], p[2]);
  });
  return '<ul>' + content + '</ul>';
}

function filterProjects(val) {
  if (val.trim() !== '') {
    displayedProjects = deployedProjects.filter((p) =>
      p[0].toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
    putTextInHtmlEltOfId('projects', getUl(displayedProjects));
  } else {
    displayedProjects = [...deployedProjects];
    putTextInHtmlEltOfId('projects', getUl(displayedProjects));
  }
}

///////////////////////////////////////////////////////////////////////////////
//                             program execution                             //
///////////////////////////////////////////////////////////////////////////////
loop();
putTextInHtmlEltOfId('projects', getUl(displayedProjects));
