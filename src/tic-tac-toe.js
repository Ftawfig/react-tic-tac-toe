import './tutorial.scss';
import { useEffect, useState} from 'react';

export function Square({ num, value, onSquareClick, winningSquares }) {
    function handleClick() {
        console.log(console.log('square #' + num + ' clicked: value:' + value));
        onSquareClick(num - 1);
    }

    var isWinningSquare = false;

    console.log(winningSquares);

    for (let i = 0; i < winningSquares.length; i ++) {
        if (winningSquares[i] == num - 1) {
            isWinningSquare = true;
        }
    }

    return (
        <button 
            className= { "square" + (isWinningSquare == 1 ? "  winning-square" : "") }
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

function calculateWinner(squares, winningSquares, setWinningSquares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];


    //check if any of the lines match up. if so, return the winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        
        if(winningSquares[0] == null) {
            setWinningSquares(lines[i].slice());
        }

        return squares[a];
      }
    }

    //If there are no empty squares, declare a draw
    for (let i = 0; i < squares.length; i++) {
        var draw = true;

        if (squares[i] == null) {
            draw = false;
            break;
        }
    }

    if (draw) {
        console.log("Draw!");
        return "Draw!";
    }

    return null;
  }

function randomBool(){
    const max = 2;
    const min = 0;

    return Math.floor(Math.random() * 2) > 0;
}

//Row() - returns a Row component of three squares. Gives each square a number starting from {start}
export function Row({ start, squares, handleClick, winningSquares}) {
    var row = [];

    //generate three squares 
    for(var i = 0; i < 3; i++) {
        var num = i + start;
        row.push(<Square 
            num = {num} 
            value = { squares[num - 1] } 
            onSquareClick = {handleClick} 
            winningSquares = { winningSquares }
        />);
    } 

    return <div className="row">{ row }</div>;
}

//Board() - returns a Board componenent of nine squares across three rows
function Board({xIsNext, squares, onPlay}) {
    var board = [];
    const [winningSquares, setWinningSquares] = useState(Array(3).fill(null));
    const winner = calculateWinner(squares, winningSquares, setWinningSquares);
    
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares, winningSquares, setWinningSquares)) {
            return;
        }

        //slice makes a copy of an array
        const newSquares = squares.slice();

        newSquares[i] = xIsNext ? "O" : "X";

        onPlay(newSquares);
    }

    let status;

    if (winner) {
        if(winner == "Draw!") {
            status = winner;
        } else {
            status = "Winner: "+ (xIsNext ? "X" : "O") + "!";
        }
    } else {
        status = "Next player: " + (xIsNext ? "O" : "X");
    }

    board.push(
        <>
            <h2 className="status-text">{ status }</h2>
        </>
    );

    for (var i = 0; i < 3; i++) {
        board.push(<Row 
            start = { i * 3  + 1 } 
            squares = { squares } 
            handleClick = { handleClick }
            winningSquares = { winningSquares }
        />);
    }

    return board
}

export default function Game() {
    //holds the state across all squares

    //true if X's turn is next, false if O is next. Randomized at init
    const [xIsNext, setXIsNext] = useState(randomBool());
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    function handlePlay(newSquares) {
        const newHistory = [...history.slice(0, currentMove + 1), newSquares]
        setHistory(newHistory);
        setCurrentMove(newHistory.length -1);
        setXIsNext(!xIsNext);
    }

    function jumpTo(moveNum) {
        setHistory(history.slice(0, moveNum + 1));
        setCurrentMove(moveNum);
    }

    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description  = "Go to move #" + move;
        } else {
            description  = "Restart";
        }

        return (
            <li>
                <button onClick={ () => jumpTo(move)}>{ description }</button>
            </li>
        );
    });

    return (
        <>
            <div className="game">
                <header>
                    <h1>Tic-Tac-Toe</h1>
                </header>
                <div className="game-board">
                    <Board 
                        xIsNext = { xIsNext }
                        squares = { currentSquares }
                        onPlay = { handlePlay }
                    />
                </div>
                <div className= { "game-info" + (history.length == 1 ? " hidden" : "") }>
                        <h2>Rewind:</h2>
                        <ul className="moves-list">{ moves }</ul>
                </div>
            </div>
        </>
    );
}