const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 200;
const OUTER_RADIUS = 75;
//const N_CIRCLES = 12;



function target() {
    let rings=document.getElementById("numberOfRings").value;

    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
    let cx = gw.getWidth() / 2;
    let cy = gw.getHeight() / 2;
    let counter = 0;
   
    for (let i = 0; i < rings; i++) {
        
        counter++;
        console.log(counter);
        if (counter%2!==0){
            gw.add(createFilledCircle(cx, cy, (rings-i) * OUTER_RADIUS / rings, "Red"));
        }
        else { gw.add(createFilledCircle(cx, cy, (rings-i) * OUTER_RADIUS / rings, "White")); }
        
    }
    //gw.add(createFilledCircle(cx, cy, 7 * OUTER_RADIUS / 7, "Red"));
    //gw.add(createFilledCircle(cx, cy, 6 * OUTER_RADIUS / 7, "White"));
    //gw.add(createFilledCircle(cx, cy, 5*  OUTER_RADIUS / 7, "Red"));
    //gw.add(createFilledCircle(cx, cy, 4 * OUTER_RADIUS / 7, "White"));
    //gw.add(createFilledCircle(cx, cy, 3 * OUTER_RADIUS / 7, "Red"));
    //gw.add(createFilledCircle(cx, cy, 2 * OUTER_RADIUS / 7, "White"));
    //gw.add(createFilledCircle(cx, cy, 1 * OUTER_RADIUS / 7, "Red"));
}

function createFilledCircle(x, y, r, color) {
    let circle = GOval(x - r, y - r, 2 * r, 2 * r);
    circle.setColor(color);
    circle.setFilled(true);
    return circle;
}