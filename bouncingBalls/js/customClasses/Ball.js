"use strict";

import { randInt } from "../utils/randInt.js";

const colors = ["red", "green", "blue", "lightblue", "gold"];
Object.freeze(colors);


export class Ball {
    /**
     * Ball
     * @param {number} x - circle center coordinate on x axis
     * @param {number} y - circle center coordinate on y axis
     * @param {number} r - circle radius
     * @param {number} vx - velocity of ball x axis
     * @param {number} vx - velocity of ball y axis
     * @param {Object} ctx - canvas 2D context
     * @param {number} xlim - canvas width
     * @param {number} ylim - canvas height
     * @param {number} margin - safety marg. (ball doesn't touch e.g. walls)
     */
    constructor(x, y, r, vx, vy, ctx, xlim, ylim, margin) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = colors[randInt(0, colors.length)];
        this.vx = vx;
        this.vy = vy;
        if (this.vx === 0 && this.vy === 0) {
            this.vx = 1;
        }
        this.xlim = xlim;
        this.ylim = ylim;
        this.ctx = ctx;
        this.margin = margin;
    }

    getX() {
        return this.x;
    }

    setX(newX) {
        this.x = newX;
    }

    getY() {
        return this.y;
    }

    setY(newY) {
        this.y = newY;
    }

    getR() {
        return this.r;
    }

    getVx() {
        return this.vx;
    }

    setVx(newVx) {
        this.vx = newVx;
    }

    negateVx() {
        this.setVx(this.getVx() * -1);
    }

    getVy() {
        return this.vy;
    }

    setVy(newVy) {
        this.vy = newVy;
    }

    negateVy() {
        this.setVy(this.getVy() * -1);
    }


    /**
     * randomly changes color 
     * (or not, since it can randomly choose the same color it had)
     */
    changeColor() {
        this.color = colors[randInt(0, colors.length)];
    }

    isCollision(other) {
        let dx = this.getX() - other.getX();
        let dy = this.getY() - other.getY();
        let c = Math.sqrt((dx * dx) + (dy * dy));
        return c <= (this.getR() + other.getR() + this.margin);
    }

    isWithinXs(xMin = 0, xMax = this.xlim) {
        let xLeftEdge = this.getX() - this.getR();
        let xRightEdge = this.getX() + this.getR();
        let xDimWithinLimits = (xLeftEdge > (xMin + this.margin)) &&
            (xRightEdge < (xMax - this.margin));
        return xDimWithinLimits;
    }

    isWithinYs(yMin = 0, yMax = this.ylim) {
        let yBottomEdge = this.getY() - this.getR();
        let yUpperEdge = this.getY() + this.getR();
        let yDimWithinLimits = (yBottomEdge > (yMin + this.margin)) &&
            (yUpperEdge < (yMax - this.margin));
        return yDimWithinLimits;
    }

    isWithinCanvas() {
        let xsOK = this.isWithinXs();
        let ysOK = this.isWithinYs();
        return xsOK && ysOK;
    }

    move() {
        if (!this.isWithinXs()) {
            this.negateVx();
        }
        if (!this.isWithinYs()) {
            this.negateVy();
        }
        this.setX(this.getX() + this.getVx());
        this.setY(this.getY() + this.getVy());
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
    }

    bounceAfterCollision(other) {
        this.negateVx();
        this.negateVy();
        this.changeColor();

        other.negateVx();
        other.negateVy();
        other.changeColor();
    }
}
