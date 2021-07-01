(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/kbr":
/*!********************************!*\
  !*** ./src/app/utils/range.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * imitates python's range function, retruns arrOfConsecutiveNums
 * imitates a bit func overloading from c++, java, e.g.
 * range(2) -> [0, 1]; range(-2) -> [0, -1] (default end=start, start=0, by=1)
 * range(1, 3) -> [1, 2, 3]; range(-1, -3) -> [-1, -2] (default by=1)
 * @param {number} start first value (incl)
 * @param {number} end end value (excl)
 * @param {number} by step betw vals (always positive, even if numbers go down)
 * @returns {Array<number>} array of vals from, to, by
 */
function pyRange(start, end, by) {
    let result = [];
    if (arguments.length === 1) {
        end = start;
        start = 0;
        by = 1;
    }
    // inaczej angular strict checker protestuje
    by = (by === undefined || by === 0) ? 1 : by;
    end = (end === undefined) ? (start + 1) : end;
    if (start < end) {
        for (let i = start; i < end; i += by) {
            result.push(i);
        }
    }
    else {
        for (let i = start; i > end; i -= by) {
            result.push(i);
        }
    }
    return result;
}
/* harmony default export */ __webpack_exports__["default"] = (pyRange);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/czesiek/Desktop/PB_JSD_2020_2021/s2z4_24_04_2021/01/memory/src/main.ts */"zUnb");


/***/ }),

/***/ "2zVV":
/*!******************************!*\
  !*** ./src/app/card/card.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Card {
    constructor(symbol) {
        this._symbol = symbol;
        this._covered = true; // covered/uncovered right now
        this._matched = false; // is matched with other card of a pair
        this._id = Card.counter;
        Card.counter += 1;
    }
    getId() {
        return this._id;
    }
    getSymbol() {
        return this._symbol;
    }
    isSymbolEqual(other) {
        return this._symbol === other._symbol;
    }
    isEqual(other) {
        return this._id === other._id;
    }
    toString() {
        return this._covered ? '' : this._symbol;
    }
    toggleCovered() {
        this._covered = !this._covered;
    }
    toggleMatched() {
        this._matched = !this._matched;
    }
    isMatched() {
        return this._matched;
    }
    isCovered() {
        return this._covered;
    }
    // for setting class of the displayed card in html
    getStatus() {
        if (this._matched) {
            return 'matched';
        }
        else if (this._covered) {
            return 'covered';
        }
        else {
            return 'uncovered';
        }
    }
}
Card.counter = 0;
/* harmony default export */ __webpack_exports__["default"] = (Card);


/***/ }),

/***/ "91vQ":
/*!*****************************************!*\
  !*** ./src/app/player/playerFactory.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "uCmH");

class PlayerFactory {
    constructor() {
        // nothing to do here
    }
    getPlayer(color, cardsIdUptoExcl) {
        return new _player__WEBPACK_IMPORTED_MODULE_0__["default"](color, cardsIdUptoExcl);
    }
}
const singleton = (function () {
    let instance; // uninitialized so undefined
    function init() {
        return new PlayerFactory();
    }
    function getInstance() {
        if (!Boolean(instance)) {
            instance = init();
        }
        return instance;
    }
    return {
        getPlayerFactoryInstance: getInstance,
    };
})();
/* harmony default export */ __webpack_exports__["default"] = (singleton);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_randInt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/randInt */ "iG7A");
/* harmony import */ var _card_cardFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card/cardFactory */ "Tbx2");
/* harmony import */ var _player_playerFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/playerFactory */ "91vQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function AppComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r7.getStatus());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r7.toString(), " ");
} }
function AppComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_21_div_1_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r4);
} }
function AppComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", player_r9.getColor())("background", player_r9.getId() === ctx_r1.playerToMove.getId() ? "lightgray" : "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", player_r9.getName(), " : ", player_r9.getPoints(), " pts ");
} }
function AppComponent_h1_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IN PROGRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_h1_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "GAME OVER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'memory';
        this.cardFactory = _card_cardFactory__WEBPACK_IMPORTED_MODULE_2__["default"].getCardFactoryInstance();
        this.playerFactory = _player_playerFactory__WEBPACK_IMPORTED_MODULE_3__["default"].getPlayerFactoryInstance();
        this.cards = this.getAllCards();
        this.players = this.getFrom2To4Players();
        this.playerToMove = this.players[0];
        this.gameOver = false;
        this.matchedCards = [];
        this.round = 1;
    }
    getAllCards() {
        let theCards = [];
        // factory returns always even Num of cards (two of a kind) and >= 4
        let nOfRows = this.cardFactory.getNumOfCards() / 4;
        let nOfCols = this.cardFactory.getNumOfCards() / nOfRows;
        for (let r = 0; r < nOfRows; r++) {
            let row = [];
            for (let c = 0; c < nOfCols; c++) {
                let aCard = this.cardFactory.getRandCard();
                row.push(aCard);
            }
            theCards.push(row);
        }
        return theCards;
    }
    getNumOfCards() {
        let row = this.cards.length;
        let col = this.cards[0].length;
        return row * col;
    }
    getFrom2To4Players() {
        let thePlayers = [];
        let colors = ['red', 'black', 'blue', 'orange'];
        let numOfPlayers = Object(_utils_randInt__WEBPACK_IMPORTED_MODULE_1__["default"])(2, 5);
        for (let i = 0; i < numOfPlayers; i++) {
            thePlayers.push(this.playerFactory.getPlayer(colors[i], this.getNumOfCards()));
        }
        return thePlayers;
    }
    changePlayerToMoveToNextOneInLine() {
        let nextPlayerId = this.playerToMove.getId() + 1;
        if (nextPlayerId < this.players.length) {
            this.playerToMove = this.players[nextPlayerId];
        }
        else {
            this.playerToMove = this.players[0];
            this.round++;
        }
    }
    updateGameOver() {
        if (this.matchedCards.length === this.getNumOfCards()) {
            this.gameOver = true;
        }
    }
    // assumption: card we are looking for is always in the cards
    getCardOfId(cardId) {
        let foundCard = this.cards[0][0];
        for (let r = 0; r < this.cards.length; r++) {
            for (let c = 0; c < this.cards[r].length; c++) {
                if (this.cards[r][c].getId() === cardId) {
                    foundCard = this.cards[r][c];
                    return foundCard;
                }
            }
        }
        return foundCard;
    }
    getTwoGuessesIeCards(aPlayer) {
        // we start with numbers (ids) cause at first a player knows no cards
        let id1, id2;
        let c1, c2;
        // players take care not to guess visible cards (so no do-while here)
        id1 = aPlayer.getFirstGuess();
        c1 = this.getCardOfId(id1);
        id2 = aPlayer.getSecondGuess(c1);
        c2 = this.getCardOfId(id2);
        return [c1, c2];
    }
    coverAllVisibleCards() {
        for (let r = 0; r < this.cards.length; r++) {
            for (let c = 0; c < this.cards[r].length; c++) {
                if (!this.cards[r][c].isCovered()) {
                    this.cards[r][c].toggleCovered();
                }
            }
        }
    }
    uncoverCards(...cards) {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].isCovered()) {
                cards[i].toggleCovered();
            }
        }
    }
    markCardsAsMatched(...cards) {
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].isMatched()) {
                cards[i].toggleMatched();
            }
        }
    }
    // inform all players of matched cards (so they don't guess the cards again)
    informAllPlayersOfMatchedCards(c1, c2) {
        for (let player of this.players) {
            player.handleMatchedCards(c1, c2);
        }
    }
    handleMatchedCards(c1, c2) {
        this.matchedCards.push(c1, c2);
        this.markCardsAsMatched(c1, c2);
        this.playerToMove.addPoints(100);
        this.informAllPlayersOfMatchedCards(c1, c2);
        this.updateGameOver();
    }
    makeMove() {
        this.coverAllVisibleCards();
        let c1, c2;
        [c1, c2] = this.getTwoGuessesIeCards(this.playerToMove);
        this.playerToMove.updateKnownCards(c1, c2);
        this.uncoverCards(c1, c2);
        if (c1.getSymbol() === c2.getSymbol()) {
            this.handleMatchedCards(c1, c2);
        }
        else {
            this.changePlayerToMoveToNextOneInLine();
        }
        console.log(this.playerToMove.getName(), "known cards:");
        console.log(this.playerToMove.getKnownCards().map((card) => { return card.getSymbol(); }).sort());
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 40, vars: 8, consts: [["colspan", "3"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "button", 3, "disabled", "click"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Game description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Below you see a set of cards with hidden symbols. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Pressing the button: \"To move: Player N\" causes \"computer player n\" to uncover two cards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Once a pair of cards with the same symbol is revealed, the cards are removed and the player gets the points ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The game ends when all the cards are paired ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Open the console to see a part of a player's memory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_div_21_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_div_27_Template, 4, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Game status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_h1_33_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_h1_34_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_37_listener() { return ctx.makeMove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Num of players [2-4]: ", ctx.players.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gameOver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameOver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ROUND: ", ctx.round, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.gameOver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" To move: ", ctx.playerToMove.getName(), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".covered[_ngcontent-%COMP%] {\n  float: left;\n  width: 4em;\n  height: 4em;\n  background-color: darkgray;\n  font-size: 3em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.1em solid white;\n  box-sizing: border-box;\n  padding: 0.2em;\n  box-shadow: 0.05em 0.05em gray;\n  border-radius: 0.3em;\n  margin: 0.1em;\n  background-image: linear-gradient(to bottom right, darkgray, lightgray, gainsboro);\n}\n\n.uncovered[_ngcontent-%COMP%] {\n  float: left;\n  width: 4em;\n  height: 4em;\n  background-color: lightblue;\n  font-size: 3em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.1em solid blue;\n  box-sizing: border-box;\n  padding: 0.2em;\n  box-shadow: 0.05em 0.05em yellow;\n  border-radius: 0.3em;\n  margin: 0.1em;\n  background-image: linear-gradient(to bottom right, #6a93ff, #6a93cd,  white);\n}\n\n.matched[_ngcontent-%COMP%] {\n  float: left;\n  width: 4em;\n  height: 4em;\n  background-color: white;\n  font-size: 3em;\n  text-shadow: 0.3em 0.3em 0.1em white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.1em dotted white;\n  box-sizing: border-box;\n  padding: 0.2em;\n  box-shadow: 0.05em 0.05em lightgray;\n  border-radius: 0.3em;\n  margin: 0.1em;\n  background-image: linear-gradient(to bottom right, lightgray, whitesmoke , white);\n}\n\nbutton[_ngcontent-%COMP%] {\n    background-color: #008CBA; \n    border: none;\n    border-radius: 0.4em;\n    color: white;\n    padding: 0.4em 0.8em;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 2em;\n    font-weight: bold;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n    background-color: lightgray;\n    cursor: auto;\n}\n\np[_ngcontent-%COMP%] {\n    font-size:  1.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrRkFBa0Y7QUFDcEY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGlGQUFpRjtBQUNuRjs7QUFFQTtJQUNJLHlCQUF5QixFQUFFLFNBQVM7SUFDcEMsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXJlZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNGVtO1xuICBoZWlnaHQ6IDRlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCB3aGl0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMC4yZW07XG4gIGJveC1zaGFkb3c6IDAuMDVlbSAwLjA1ZW0gZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIG1hcmdpbjogMC4xZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIGRhcmtncmF5LCBsaWdodGdyYXksIGdhaW5zYm9ybyk7XG59XG5cbi51bmNvdmVyZWQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDRlbTtcbiAgaGVpZ2h0OiA0ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgZm9udC1zaXplOiAzZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDAuMWVtIHNvbGlkIGJsdWU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuMmVtO1xuICBib3gtc2hhZG93OiAwLjA1ZW0gMC4wNWVtIHllbGxvdztcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIG1hcmdpbjogMC4xZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM2YTkzZmYsICM2YTkzY2QsICB3aGl0ZSk7XG59XG5cbi5tYXRjaGVkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0ZW07XG4gIGhlaWdodDogNGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzZW07XG4gIHRleHQtc2hhZG93OiAwLjNlbSAwLjNlbSAwLjFlbSB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMC4xZW0gZG90dGVkIHdoaXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwLjJlbTtcbiAgYm94LXNoYWRvdzogMC4wNWVtIDAuMDVlbSBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICBtYXJnaW46IDAuMWVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCBsaWdodGdyYXksIHdoaXRlc21va2UgLCB3aGl0ZSk7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOENCQTsgLyogYmx1ZSAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC40ZW0gMC44ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBjdXJzb3I6IGF1dG87XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogIDEuN2VtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "Tbx2":
/*!*************************************!*\
  !*** ./src/app/card/cardFactory.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "2zVV");
/* harmony import */ var _utils_randInt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/randInt */ "iG7A");


class CardFactory {
    constructor() {
        this._symbols = [
            '!',
            '@',
            '#',
            '$',
            '%',
            '^',
            '&',
            '*',
            '=',
            '+',
            '-',
            '~',
        ];
        // I changed _ to ~ because its easier to tell the difference with -
        // used for testing
        // private _symbols: string[] = [
        //     '!',
        //     '@',
        //     '#',
        //     '$',
        // ];
        this._cards = [];
        for (let i = 0; i < this._symbols.length; i++) {
            // creates two cards of a kind
            this._cards.push(new _card__WEBPACK_IMPORTED_MODULE_0__["default"](this._symbols[i]));
            this._cards.push(new _card__WEBPACK_IMPORTED_MODULE_0__["default"](this._symbols[i]));
        }
    }
    getNumOfCards() {
        return this._cards.length;
    }
    /**
     * returns a random card
     * or unefined if the deck is empty
     */
    getRandCard() {
        // Array.splice() returns an array and modifies the original array
        return this._cards.splice(Object(_utils_randInt__WEBPACK_IMPORTED_MODULE_1__["default"])(this._cards.length), 1)[0];
    }
}
const singleton = (function () {
    let instance; // uninitialized so undefined
    function init() {
        return new CardFactory();
    }
    function getInstance() {
        if (!Boolean(instance)) {
            instance = init();
        }
        return instance;
    }
    return {
        getCardFactoryInstance: getInstance,
    };
})();
/* harmony default export */ __webpack_exports__["default"] = (singleton);


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");


// do dzialania task1 (ngForms), np. [(ngModel)]




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iG7A":
/*!**********************************!*\
  !*** ./src/app/utils/randInt.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * python like randInt
 * returns random int from given range (incl-excl)
 * @param {number}  min - minimum (incl)
 * @param {number}  max - maximum (excl)
 * @returns {number} random value from a given range
 */
function randInt(min, max) {
    let result = 0;
    for (let i = 0; i < 2; i++) {
        if (arguments[i] < 0) {
            throw new Error('range must not include negative numbers');
        }
    }
    if (arguments.length === 1) {
        max = min;
        min = 0;
    }
    // floats protection
    min = Math.ceil(min);
    // should always be true,
    // but the stricter angular checker requires me to do that way
    if (max) {
        max = Math.floor(max);
        result = Math.floor(Math.random() * (max - min)) + min;
    }
    return result;
}
/* harmony default export */ __webpack_exports__["default"] = (randInt);


/***/ }),

/***/ "uCmH":
/*!**********************************!*\
  !*** ./src/app/player/player.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_randInt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/randInt */ "iG7A");
/* harmony import */ var _utils_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/range */ "/kbr");


class Player {
    constructor(color, cardsIdUptoExcl) {
        this._points = 0;
        this._knownCards = [];
        this._knownTwoSymbols = [];
        this._availableCardIds = []; // to get card id at random
        this._id = Player.counter;
        this._color = color;
        Player.counter++;
        this._availableCardIds = Object(_utils_range__WEBPACK_IMPORTED_MODULE_1__["default"])(cardsIdUptoExcl);
    }
    getId() {
        return this._id;
    }
    getPoints() {
        return this._points;
    }
    getColor() {
        return this._color;
    }
    addPoints(howMany) {
        this._points += howMany;
    }
    getName() {
        return "Player " + (this._id + 1).toString();
    }
    /**
     * returns a random guess (id of a card)
     */
    getRandomGuess() {
        return this._availableCardIds[Object(_utils_randInt__WEBPACK_IMPORTED_MODULE_0__["default"])(this._availableCardIds.length)];
    }
    getFirstGuess() {
        let bestGuesses = this.getIdsOfCardsForTwoKnownSymbols();
        if (bestGuesses.length !== 0) {
            return bestGuesses[0];
        }
        else {
            return this.getRandomGuess();
        }
    }
    getSecondGuess(prevGuess) {
        let result;
        let matchingCard = [];
        matchingCard = this._knownCards.filter((card) => {
            return card.isSymbolEqual(prevGuess) && !card.isEqual(prevGuess);
        });
        if (matchingCard.length !== 0) {
            result = matchingCard[0].getId();
        }
        else {
            do {
                result = this.getRandomGuess();
            } while (result === prevGuess.getId());
        }
        return result;
    }
    getKnownCards() {
        return this._knownCards;
    }
    /**
     * returns number[] (ids) of two known cards from memory or [] if empty
     */
    getIdsOfCardsForTwoKnownSymbols() {
        let theIds = [];
        let cards = this._knownCards.filter((card) => {
            return card.getSymbol() === this._knownTwoSymbols[0];
        });
        if (cards.length === 2) {
            theIds = [cards[0].getId(), cards[1].getId()];
        }
        return theIds;
    }
    handleMatchedCard(cardIn) {
        this._knownCards = this._knownCards.filter((card) => {
            return card.getId() !== cardIn.getId();
        });
        this._knownTwoSymbols = this._knownTwoSymbols.filter((symbol) => {
            return symbol !== cardIn.getSymbol();
        });
        this._availableCardIds = this._availableCardIds.filter((someId) => {
            return someId !== cardIn.getId();
        });
    }
    ;
    handleMatchedCards(...cards) {
        for (let i = 0; i < cards.length; i++) {
            this.handleMatchedCard(cards[i]);
        }
    }
    updateKnownCard(cardIn) {
        let cardIdInKnownCards = this._knownCards.some((card) => {
            return card.getId() === cardIn.getId();
        });
        let cardSymbolInKnownCards = this._knownCards.some((card) => {
            return card.getSymbol() === cardIn.getSymbol();
        });
        if (!cardIdInKnownCards) {
            this._knownCards.push(cardIn);
        }
        if (!cardIdInKnownCards && cardSymbolInKnownCards) {
            this._knownTwoSymbols.push(cardIn.getSymbol());
        }
    }
    updateKnownCards(...cards) {
        for (let i = 0; i < cards.length; i++) {
            this.updateKnownCard(cards[i]);
        }
    }
}
Player.counter = 0;
/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map