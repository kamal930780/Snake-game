let inputDir = { x: 0, y: 0 };
let speed = 5;
let LastPaintTime = 0;
let snakearr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };
let score =0;

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - LastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    LastPaintTime = ctime;
    gameEngine();

}
    function iscollide(snake){
        for(let i=1; i < snake.length; i++){
            if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
                return true;
            }
        }
        if(snake[0].x >18 || snake[0].x <0 || snake[0].y >18 || snake[0].y <0){
                return true;
            }
}


    


function gameEngine() {
    if(iscollide(snakearr)) {
        inputDir = { x: 0, y: 0};
        alert("Game Over. Press any key to play again!")
        snakearr =[{ x: 13, y: 15}];
        food= { x: 6,y: 7};
        score = 0;
    }

    if(snakearr[0].y=== food.y && snakearr[0].x === food.x){
        console.log("food eaten");
        snakearr.unshift({ x: snakearr[0].x + inputDir.x, y:snakearr[0].y + inputDir.y});
        score +=1;
        scoreBox.innerHTML = "Score:" + score;
        let a =2;
        let b= 16;

        food = { x: Math.round(a+(b-a)*Math.random()), y: Math.round(a+(b-a)*Math.random())}
    }
    for ( let i= snakearr.length-2; i>=0; i--) {
        snakearr[i + 1]= {...snakearr[i]}

    }
    snakearr[0].x += inputDir.x;
    snakearr[0].y += inputDir.y;




    board.innerHTML = "";

    snakearr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index == 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add("snake");
        }
        board.appendChild(snakeElement);
    });

    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir={ x:0, y:-1}
    switch (e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            break;
        default:
            break;
    

    }})