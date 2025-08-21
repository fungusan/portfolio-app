"use strict";
var W, H, L, n = 15;
const {sin, cos, PI, random} = Math;

function id(n) {
    return document.getElementById(n);
}

function atan(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    if (dx === 0) {
        return dy >= 0 ? PI / 2 : (3 / 2) * PI;
    } else if (dx > 0) {
        return Math.atan(dy / dx);
    } else {
        return PI + Math.atan(dy / dx);
    }
}

window.onload = function() {
    var cnv = id("canvas");
    var ctx = cnv.getContext("2d");

    function init() {
        W = window.innerWidth;
        H = window.innerHeight;
        cnv.width = W;
        cnv.height = H;
        L = Math.min(W, H) / 2;
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, W, H);
    }
    init();
    window.onresize = init;

    function Point() {
        this.ang = 2 * PI * random();
        this.dang = (-0.5 + random()) / 10;
        this.r = 2 * L / 3;
        this.x = W / 2 + this.r * cos(this.ang);
        this.y = H / 2 + this.r * sin(this.ang);
        this.update = function() {
            this.ang += this.dang;
            this.x = W / 2 + this.r * cos(this.ang);
            this.y = H / 2 + this.r * sin(this.ang);
        };
    }

    var ctrls = [];
    for (let i = 0; i < n; i++) {
        ctrls.push(new Point());
    }

    function animate() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // Subtle fade for smooth trails
        ctx.fillRect(0, 0, W, H);
        ctx.beginPath();
        ctx.moveTo((ctrls[0].x + ctrls[n - 1].x) / 2, (ctrls[0].y + ctrls[n - 1].y) / 2);
        for (let p = 0; p < n; p++) {
            let q = p + 1;
            if (q === n) q = 0;
            ctx.quadraticCurveTo(ctrls[p].x, ctrls[p].y, (ctrls[p].x + ctrls[q].x) / 2, (ctrls[p].y + ctrls[q].y) / 2);
            ctrls[p].update();
        }
        ctx.strokeStyle = "#000"; // Simple black lines
        ctx.lineWidth = L * 1 / 432; // Thinner lines for minimalism
        ctx.stroke();

        window.requestAnimationFrame(animate);
    }
    animate();
};