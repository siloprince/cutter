'use strict';
(function (console) {
    let config = {
        scale: 25,
    };
    console.log('<svg>');
    let scale = config.scale;
    let points = [];
    let start = [50, 50];
    let numx = 43;
    let numy = 5;
    numx = 42; 
    numy = 4;


    for (let yi = 0; yi < numy; yi++) {
        let x0 = start[0];
        let y0 = start[1] + scale * yi * (Math.sqrt(3) * 7/2);
        

        let x1 = x0 + scale * (numx + 1);
        let y1 = y0;
        if (yi === 0) {
            points.push(`${x0} ${y0}`);
            points.push(`${x1} ${y1}`);
            draw(points);
        }
        if (yi === 0) {
            for (let xi = 0; xi < numx + 2; xi++) {
                // backward
                let xj = numx - xi;
                let x2 = x0 + scale * (xj + 1);
                let y2 = y0 ;
                points.push(`${x2} ${y2}`);
                let x3 = x2 + scale * (3 / 4);
                let y3 = y2+ scale * (Math.sqrt(3) * 3 / 4);
                points.push(`${x3} ${y3}`);

                draw(points);
            }
        }
        let x4 = x0 + scale * (-1/4);
        let y4 = y0 + scale * (Math.sqrt(3)* 7/4);
        points.push(`${x4} ${y4}`);

        let x5 = x4 + scale * (numx + 2);
        let y5 = y4;
        points.push(`${x5} ${y5}`);
        draw(points);

        for (let xi = 0; xi < numx + 3; xi++) {
            // backward
            let xj = numx - xi;
            let xs=0;
            let xe=0;
            let ys=0;
            let ye=0;
            if (xj=== numx) {
                xs = -1;
                xe = 1;
                ys = Math.sqrt(3);
                ye = -Math.sqrt(3);
            } else if (xj=== -2) {
                xs = 0;
                xe = 3/4;
                ys = 0;
                ye = -Math.sqrt(3)* 3/4;
            }
            let x6 = x0 + scale * (xj + 7 / 4 + 1 + xs);
            let y6 = y0 + scale * (Math.sqrt(3) * 3 / 4 + ys);
            points.push(`${x6} ${y6}`);
            let x7 = x6 + scale * (-7 / 4 + xe);
            let y7 = y6 + scale * (Math.sqrt(3) * 7 / 4 + ye);
            points.push(`${x7} ${y7}`);

            draw(points);
        }
        let x10 = x0;
        let y10 = y0 + scale * (Math.sqrt(3)* (7/4+7/4));
        points.push(`${x10} ${y10}`);

        let x11 = x10 + scale * (numx + 2);
        let y11 = y10;
        points.push(`${x11} ${y11}`);
        draw(points);

        for (let xi = 0; xi < numx + 3; xi++) {
            // backward
            let xj = numx - xi + 1;
            let xs=0;
            let xe=0;
            let ys=0;
            let ye=0;
            if (xj=== numx+1 || yi===numy-1) {
                xs = 0;
                xe = -3/4;
                ys = 0;
                ye = -Math.sqrt(3)*3/4;
            }
            if (xj=== -1 ) {
                if (yi===numy-1){
                    continue;
                } else {
                    xs = 1;
                    ys = Math.sqrt(3);
                    xe = -1;
                    ye = -Math.sqrt(3);
                }
            }
            let x8 = x0 + scale * (xs+ xj);
            let y8 = y0 + scale * (ys+ Math.sqrt(3) * 10 / 4);
            points.push(`${x8} ${y8}`);
            let x9 = x8 + scale * (xe+7 / 4);
            let y9 = y8 + scale * (ye+Math.sqrt(3) * 7 / 4);
            points.push(`${x9} ${y9}`);

            draw(points);
        }
    }
    console.log('</svg>');

    function draw(points) {
        console.log(`<path d="M ${points.join(' L ')}"/>`);
        points.length = 0;
    }
})(console);

