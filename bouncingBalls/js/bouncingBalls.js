"use strict";

import { Ball } from "./customClasses/Ball.js";
import { randInt } from "./utils/randInt.js";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let balls = [];

function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getRandomBall() {
    let randomBall = new Ball(
        randInt(0, 500), randInt(0, 500), randInt(20, 50),
        randInt(-1, 2), randInt(-1, 2),
        ctx, canvas.width, canvas.height, 2);
    return randomBall;
}

function doesBallOverlapWitPrevBalls(arrBalls, someBall) {
    if (arrBalls.length === 0) {
        return false;
    }
    for (let i = 0; i < arrBalls.length; i++) {
        if (someBall.isCollision(arrBalls[i])) {
            return true;
        }
    }
    return false;
}

function getBalls(howMany = 6) {
    let theBalls = [];
    let theBall;
    for (let i = 0; i < howMany; i++) {
        do {
            theBall = getRandomBall();
        } while (!theBall.isWithinCanvas() ||
            doesBallOverlapWitPrevBalls(theBalls, theBall)
        )
        theBalls.push(theBall);
    }
    return theBalls;
}

function drawBalls(balls) {
    clearBoard();
    for (let ball of balls) {
        ball.draw();
    }
}

function moveBalls(balls) {
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        for (let j = i + 1; j < balls.length; j++) {
            if (balls[i].isCollision(balls[j])) {
                // bounces two balls after collision
                balls[i].bounceAfterCollision(balls[j]);
            }
        }
    }
}

balls = getBalls();

setInterval(() => {
    drawBalls(balls);
    moveBalls(balls);
}, 40);
