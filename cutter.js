'use strict';
(function (console) {
    let config = {
        scale: 30,
    };
    console.log('<svg>');
    let scale = config.scale;
    let points = [];
    let start = [50, 50];
    let numx = 10;
    let numy = 10;

    for (let yi = 0; yi < numy; yi++) {       
        let x0 = start[0];
        let y0 = start[1] + scale * yi * ((4 + 2 / 3) * Math.sqrt(3) / 2);
        points.push(`${x0} ${y0}`);
        let tt = 0;
        if (yi > 0) {
            tt = 1;
        } 
        let x1 = x0 + scale * (numx + tt);
        let y1 = y0;
        points.push(`${x1} ${y1}`);

        draw(points);
        if (yi === 0) {
            for (let xi = 0; xi < numx+1; xi++) {
                // backward
                let xj = numx - xi;
                let x2 = x0 + scale * xj;
                let y2 = y0;
                points.push(`${x2} ${y2}`);
                let x3 = x2 + scale * (1 / 2);
                let y3 = y2 + scale * (Math.sqrt(3) / 2);
                points.push(`${x3} ${y3}`);

                draw(points);
            }
        }
        for (let xi = 0; xi < numx + 1; xi++) {
            let x4 = x0 + scale * (xi + 1 / 2);
            let y4 = y0 + scale * (Math.sqrt(3) / 2);
            points.push(`${x4} ${y4}`);
            let x5 = x4 + scale * (1 / 2);
            let y5 = y4 + scale * (Math.sqrt(3) / 6);
            points.push(`${x5} ${y5}`);
            draw(points);
        }
        for (let xi = 0; xi < numx; xi++) {
            // backward
            let xj = numx - xi - 1;
            let x6 = x0 + scale * (xj + 1 / 2 + 1);
            let y6 = y0 + scale * (Math.sqrt(3) / 2);
            points.push(`${x6} ${y6}`);
            let x7 = x6 + scale * (- 1 / 2);
            let y7 = y6 + scale * (Math.sqrt(3) / 6);
            points.push(`${x7} ${y7}`);
            draw(points);
        }
        for (let xi = 0; xi < numx + 1; xi++) {
            let x8 = x0 + scale * (xi + 1);
            let y8 = y0 + scale * (Math.sqrt(3) * (1 / 2 + 1 / 6));
            points.push(`${x8} ${y8}`);
            let x9 = x8 + scale * (- 1);
            let y9 = y8 + scale * (Math.sqrt(3));
            points.push(`${x9} ${y9}`);
            draw(points);
        }
        for (let xi = 0; xi < numx; xi++) {
            // backward
            let xj = numx - xi - 1;
            let x10 = x0 + scale * (xj + 1);
            let y10 = y0 + scale * (Math.sqrt(3) * (3 / 2 + 1 / 6));
            points.push(`${x10} ${y10}`);
            let x11 = x10 + scale * (-1 / 2);
            let y11 = y10 + scale * (Math.sqrt(3) / 6);
            points.push(`${x11} ${y11}`);
            draw(points);
        }
        for (let xi = 0; xi < numx + 1; xi++) {
            let x10 = x0 + scale * (xi + 0);
            let y10 = y0 + scale * (Math.sqrt(3) * (3 / 2 + 1 / 6));
            points.push(`${x10} ${y10}`);
            let x11 = x10 + scale * (1 / 2);
            let y11 = y10 + scale * (Math.sqrt(3) / 6);
            points.push(`${x11} ${y11}`);
            draw(points);
        }
        let x12 = x0 + scale * (1 / 2);
        let y12 = y0 + scale * (Math.sqrt(3) * (1 + 1 / 6));
        points.push(`${x12} ${y12}`);
        let x13 = x12 + scale * (numx);
        let y13 = y12;
        points.push(`${x13} ${y13}`);
        draw(points);
        for (let xi = 0; xi < numx + 2; xi++) {
            // backward
            let xj = numx - xi;
            let rr = 0;
            if (xj === -1) {
                rr = 1 / 2;
            }
            let x14 = x0 + scale * (xj + 1 / 2 + rr );
            let y14 = y0 + scale * (Math.sqrt(3) * (3 / 2 + 1 / 3 + rr));
            points.push(`${x14} ${y14}`);
            let ss = 1;
            if (xj === numx || yi === numy - 1) {
                ss = 1 / 2;
            }
            let x15 = x14 + scale * (1 - rr) * ss;
            let y15 = y14 + scale * (Math.sqrt(3)) * (1 -rr) * ss;
            points.push(`${x15} ${y15}`);
            draw(points);
        }
    }
    console.log('</svg>');

    function draw(points) {
        console.log(`<path d="M ${points.join(' L ') } z"/>`);
        points.length = 0;
    }
})(console);


