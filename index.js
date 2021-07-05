///////////////////////////////////////////////////////////////////////////////
//                              global variables                             //
///////////////////////////////////////////////////////////////////////////////
let text1 = "$ whoami";
let text1Substrings = getSubstringsOfLenFrom1toN(text1);
let text2 = "Bartek Lukaszuk";
let text3 = "$ ";
let cursor = "&#9646;";
let i = 0;
let loopId = 0;

///////////////////////////////////////////////////////////////////////////////
//                                 functions                                 //
///////////////////////////////////////////////////////////////////////////////
// returns arrays of substrings of lenghts from 1 to n
// from left, e.g "ala" -> ["a", "al", "ala"]
function getSubstringsOfLenFrom1toN(text) {
    let result = [];
    for (let i = 1; i <= text.length; i++) {
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
        putTextInHtmlEltOfId("text1", text1);
        putTextInHtmlEltOfId("text2", text2);
        putTextInHtmlEltOfId("text3", text3 + cursor);
        return undefined; // end recursion
    }
    if (i < text1Substrings.length) {
        putTextInHtmlEltOfId("text1", text1Substrings[i] + cursor);
        i++;
    }
    loopId = setTimeout(loop, delay);
}

///////////////////////////////////////////////////////////////////////////////
//                             program execution                             //
///////////////////////////////////////////////////////////////////////////////
loop();
