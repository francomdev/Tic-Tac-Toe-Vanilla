const X = '❌'
const O = '⚫️'

const squares = document.getElementsByClassName("square")
const winner = document.getElementById("winner")
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
const restartButton = document.getElementById("restart")

restartButton.addEventListener('click', restartGame)

let gameOver = false

for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(!gameOver) {
            if(board[i] === " ") {
                board[i] = X
                squares[i].innerHTML = X
            setTimeout(()=> {
                checkWinner()
                checkDraw()
                if(!gameOver) {
                    computerMove()
                    setTimeout(() => {
                    checkWinner()
                    checkDraw()
                },100)
                }
            }, 100)
            }
        }
    })
}

function computerMove() {
    const computerSquare = Math.floor(Math.random()* 9) 
    console.log(computerSquare)
    if(board[computerSquare] === " ") {
        board[computerSquare] = O 
        squares[computerSquare].innerHTML = O
    } else {
        computerMove()
    }
}


function checkWinner() {
    if (board[0] === board[1] && board[1] === board[2] && board[0] != " ") {
        gameOver = true
        if( board[0] === X) {
            winner.innerHTML = "Player wins!"
        } else {
            winner.innerHTML = "Player looses!"
        }
    } else if (board[0] === board[3] && board[3] === board[6] && board[0] != " ") {
        gameOver = true
        if( board[0] === X) {
            winner.innerHTML = "Player wins!"
        } else {
            winner.innerHTML = "Player looses!"
        }
    } else if (board[1] === board[4] && board[4] === board[7] && board[1] != " ") {
        gameOver = true
        if( board[1] === X) {
            winner.innerHTML = "Player wins!"
        } else {
            winner.innerHTML = "Player looses!"
        }
    } else if (board[2] === board[5] && board[5] === board[8] && board[2] != " ") {
        gameOver = true
        if( board[2] === X) {
            winner.innerHTML = "Player wins!"
        } else {
            winner.innerHTML = "Player looses!"
        }
    } else if (board[3] === board[4] && board[4] === board[5] && board[3] != " ") {
        gameOver = true
        if( board[3] === X) {
            winner.innerHTML = "Player wins!"
        } else {
            winner.innerHTML = "Player looses!"
        }
    } else if (board[6] === board[7] && board[7] === board[8] && board[6] != " ") {
        gameOver = true
        if( board[6] === X) {
            winner.innerHTML = "Player wins!"
        } else {
            winner.innerHTML = "Player looses!"
        }
    } else if (board[0] === board[4] && board[4] === board[8] && board[0] != " ") {
        gameOver = true
        if( board[0] === X) {
            winner.innerHTML = "Player wins!"
        } else {
            winner.innerHTML = "Player looses!"
        }
    } else if (board[2] === board[4] && board[4] === board[6] && board[2] != " ") {
        gameOver = true
        if( board[2] === X) {
            winner.innerHTML = "Player wins!"
        } else {
            winner.innerHTML = "Player looses!"
        }
    }
}

function checkDraw() {
    const fullBoard = !board.includes(" ")
    if (!gameOver && fullBoard) {
        winner.innerHTML = "It's a draw!"
    }
}

function restartGame() {
    board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    for(let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = ' '
    }
    gameOver = false
    winner.innerHTML = ' '
    console.log('restart game')
}