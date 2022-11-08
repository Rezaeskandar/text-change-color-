let tittle = document.getElementById('tittle');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');


function blue() {
    let color = 'blue';
    tittle.setAttribute('style', 'color:' + color);
    p1.setAttribute('style', 'color:' + color);
    p2.setAttribute('style', 'color:' + color);
}

/* make it red */
function red() {
    let color = 'red';
    tittle.setAttribute('style', 'color:' + color);
    p1.setAttribute('style', 'color:' + color);
    p2.setAttribute('style', 'color:' + color);
}
/* undo everything */
function undo() {
    let color = 'black';
    tittle.setAttribute('style', 'color:' + color);
    p1.setAttribute('style', 'color:' + color);
    p2.setAttribute('style', 'color:' + color);
}

