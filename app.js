const container = document.getElementById("gridContainer");
const clear = document.getElementById('clear')
const tenBtn = document.getElementById('byTens')
const twentyBtn = document.getElementById('byTwenties')
const thirtyBtn = document.getElementById('byThirties')
const warmBtn = document.getElementById('warm')
const coldBtn = document.getElementById('cold')
const blackBtn = document.getElementById('black')
const whiteBtn = document.getElementById('white')

//create the grid for pad
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "gridBox";
  };
};

//creates hover effect on pad with Warm Color.
function makeWarm(){
    const perBox = container.querySelectorAll('.gridBox')
    perBox.forEach(box => box.addEventListener('mouseover', () => {
        const arrayWarm = ['#9b2948','#ff7251','#ffca7b','#ffcd74','#ffedbf'];
        const warmNum = ~~(Math.random()*arrayWarm.length);
        const randomWarm = arrayWarm[warmNum]
        box.style.background = randomWarm
    }))
}

//creates hover effect on pad with Cold Color.
function makeCold(){
    const perBox = container.querySelectorAll('.gridBox')
    perBox.forEach(box => box.addEventListener('mouseover', () => {
        const arrayCold = ['#b8dfe7','#5fd4c5','#6380e5','#403bbd','#160e6f'];
        const coldNum = ~~(Math.random()*arrayCold.length);
        const randomCold = arrayCold[coldNum]
        box.style.background = randomCold
    }))
}

//creates hover effect on pad with Black Color.
function makeBlack(){
    const perBox = container.querySelectorAll('.gridBox')
    perBox.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}

//creates hover effect on pad with White Color.
function makeWhite(){
    const perBox = container.querySelectorAll('.gridBox')
    perBox.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'white'
    }))
}

//removes gridbox from pad, making all boxes white while preserving number of boxes
function clearPad(){
    const perBox = container.querySelectorAll('.gridBox')
    perBox.forEach(box => box.remove())
}

//logic on reset
function game(){
    //start standard 20x20 grid and saves gridsize changes
    let keepBox = 20;
    let keepcolor;
    //first game standard 20,20
    makeRows(keepBox,keepBox)
    warmBtn.addEventListener('click', () =>{
        makeWarm();
        keepcolor = makeWarm();
    })
    coldBtn.addEventListener('click', () =>{
        makeCold();
    })
    blackBtn.addEventListener('click', () =>{
        makeBlack();
    })
    whiteBtn.addEventListener('click', () =>{
        makeWhite();
    })

    //button event, ask for new gridsize
    tenBtn.addEventListener('click', ()=>{
        clearPad();
        makeRows(10,10)
        
        keepBox = 10;
    })
    twentyBtn.addEventListener('click', ()=>{
        clearPad();
        makeRows(20,20)
        
        keepBox = 20;
    })
    thirtyBtn.addEventListener('click', ()=>{
        clearPad();
        makeRows(30,30)
        
        keepBox = 30;
    })
    clear.addEventListener('click',()=>{
        clearPad();
        makeRows(keepBox,keepBox);
        
    })
}
game();
