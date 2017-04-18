'use strict';
(function (console) {
    let config = {
        scale: 30,
    };
    console.log('<svg>');
    let scale = config.scale;
    let points = [];
    let start = [50, 50];
    let numx = 20;
    let numy = 5;
    let margin = 0.2;

    for (let yi = 0; yi < numy+1; yi++) {
        let x0 = start[0] - scale*(margin);
        let y0 = start[1] + scale* yi * 2*(1+Math.sqrt(3)/2);
        points.push(`${x0} ${y0}`);
        let x1 = x0 + scale*(2*margin + numx * 1);
        let y1 = y0;
        points.push(`${x1} ${y1}`);
        let x2 = x1;
        let y2 = y1 + scale*(1+Math.sqrt(3)/2);
        points.push(`${x2} ${y2}`);
        let x3 = x0;
        let y3 = y2;
        points.push(`${x3} ${y3}`);
    }
    draw(points);
    console.log('</svg>');

    function draw(points) {
        console.log(`<path stroke="black" stroke-width="1" fill="none" d="M ${points.join(' L ')}"/>`);
        points.length = 0;
    }
})(console);

