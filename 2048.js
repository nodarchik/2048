const { update } = require("tar");

var board;
var score = 0;
var rows = 4;
var columns = 4;
window.onload = function(){
    setGame();
}
function setGame(){
    board = [
        [0,2,0,0],
        [0,4,0,0],
        [0,8,0,0],
        [0,16,0,0]
    ]
    for(let r=0; r<rows; r++){
        for (let c=0; c<columns; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile,num);
        }
    }
}
function updateTile(tile,num){
    tile.innerText = "";
    tile.classList.value = "";
    tile.classList.add("tile");
    if(num>0){
        tile.innerText=num;
        if(num<=4096){
            tile.classList.add("x"+num.toString());
        }else{
            tile.classList.add("x8192");
        }
    }
}