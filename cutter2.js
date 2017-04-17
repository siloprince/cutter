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

    for (let yi = 0; yi < numy; yi++) {
        let x0 = start[0];
        let y0 = start[1] + scale * yi * (2 + Math.sqrt(3));
        points.push(`${x0} ${y0}`);

        let x1 = x0 + scale * (numx + 1);
        let y1 = y0;
        points.push(`${x1} ${y1}`);
        draw(points);

        if (yi === 0) {
            for (let xi = 0; xi < numx + 1; xi++) {
                // backward
                let xj = numx - xi;
                let x2 = x0 + scale * (xj + 1);
                let y2 = y0;
                points.push(`${x2} ${y2}`);
                let x3 = x2 + scale * (-1 / 2);
                let y3 = y2 + scale * (Math.sqrt(3) / 2);
                points.push(`${x3} ${y3}`);

                draw(points);
            }

            for (let xi = 0; xi < numx + 1; xi++) {
                let x4 = x0 + scale * (xi);
                let y4 = y0;
                points.push(`${x4} ${y4}`);
                let x5 = x4;
                let y5 = y4 + scale * (1);
                points.push(`${x5} ${y5}`);
                draw(points);
            }
        }
        for (let xi = 0; xi < numx + 1; xi++) {
            // backward
            let xj = numx - xi;
            let x6 = x0 + scale * (xj + 1 / 2);
            let y6 = y0 + scale * (Math.sqrt(3) / 2);
            points.push(`${x6} ${y6}`);
            let x7 = x6;
            let y7 = y6 + scale * (2);
            points.push(`${x7} ${y7}`);
            draw(points);
        }
        let x8 = start[0] + scale * (1 / 2);
        let y8 = start[1] + scale * (1 + Math.sqrt(3) / 2 + yi * (2 + Math.sqrt(3)));
        points.push(`${x8} ${y8}`);
        let x9 = x8 + scale * (numx);
        let y9 = y8;
        points.push(`${x9} ${y9}`);
        draw(points);
        for (let xi = 0; xi < numx + 1; xi++) {
            // backward
            let xj = numx - xi;
            let x10 = x0 + scale * (xj);
            let y10 = y0 + scale * (1);
            points.push(`${x10} ${y10}`);
            let x11 = x10 + scale * (1);
            let y11 = y10 + scale * (Math.sqrt(3));
            points.push(`${x11} ${y11}`);
            draw(points);
        }
        for (let xi = 0; xi < numx + 2; xi++) {
            let ys = 0;
            let ye = 0;
            if (xi === 0) {
                if (yi === numy - 1) {
                    continue;
                }
                ys = 1;
                ye = -1;
            } else if (xi === numx + 1 || yi === numy - 1) {
                ys = 0;
                ye = -1;
            }
            let x12 = x0 + scale * (xi);
            let y12 = y0 + scale * (1 + ys + Math.sqrt(3));
            points.push(`${x12} ${y12}`);
            let x13 = x12;
            let y13 = y12 + scale * (2 + ye);
            points.push(`${x13} ${y13}`);
            draw(points);
        }
        for (let xi = 0; xi < numx + 2; xi++) {
            // backward
            let xj = numx - xi;
            let xs = 0;
            let xe = 0;
            let ys = 0;
            let ye = 0;

            if (xj === -1) {
                if (yi === numy - 1) {
                    continue;
                }
                xs = -1 / 2;
                xe = 1 / 2;
                ys = Math.sqrt(3) / 2;
                ye = -Math.sqrt(3) / 2;
            } else if (xj === numx || yi === numy - 1) {
                xs = 0;
                xe = 1 / 2;
                ys = 0;
                ye = -Math.sqrt(3) / 2;
            }

            let x14 = x0 + scale * (xi + xs + 1 / 2);
            let y14 = y0 + scale * (2 + ys + Math.sqrt(3) / 2);
            points.push(`${x14} ${y14}`);
            let x15 = x14 + scale * (-1 + xe);
            let y15 = y14 + scale * (Math.sqrt(3) + ye);
            points.push(`${x15} ${y15}`);
            draw(points);
        }
    }
    console.log('</svg>');

    function draw(points) {
        console.log(`<path d="M ${points.join(' L ')} z"/>`);
        points.length = 0;
    }
})(console);

