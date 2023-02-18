import './tutorial.css';
import { useState} from 'react';

export function Square({ num, value, onSquareClick }) {
    function handleClick() {
        console.log(console.log('square #' + num + ' clicked: value:' + value));
        onSquareClick(num - 1);
    }

    return (
        <button 
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

function calculateWinner(squares, xIsNext) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

        return squares[a];
      }
    }
    return null;
  }

//Row() - returns a Row component of three squares. Gives each square a number starting from {start}
export function Row({ start, squares, setSquares, xIsNext, setXIsNext, setWinnerText}) {
    var row = [];

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares, xIsNext)) {
            return;
        }

        //slice makes a copy of an array
        const newSquares = squares.slice();
        if (xIsNext) {
            newSquares[i] = "X";
            setXIsNext(false);
        } else {
            newSquares[i] = "O";
            setXIsNext(true);
        }

        setSquares(newSquares);
    }

    //generate three squares 
    for(var i = 0; i < 3; i++) {
        var num = i + start;
        console.log(num);
        row.push(<Square 
            num = {num} 
            value = { squares[num - 1] } 
            onSquareClick = {handleClick} 
        />);
    } 

    return <div className="row">{ row }</div>;
}

//Board() - returns a Board componenent of nine squares across three rows
function Board(xIsNext, setXIsNext) {
    var board = [];
    
    //holds the state across all squares
    const [squares, setSquares] = useState(Array(9).fill(null));
    
    const winner = calculateWinner(squares, xIsNext);

    let status;

    if (winner) {
        status = "Winner: "+ (xIsNext ? "O" : "X") + "!";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    board.push(
        <>
        <div className="status-text">{ status }</div>
        </>
    );

    for (var i = 0; i < 3; i++) {
        board.push(<Row 
            start = { i * 3  + 1 } 
            squares = { squares } 
            setSquares = { setSquares } 
            xIsNext = { xIsNext }
            setXIsNext = { setXIsNext }
        />);
    }

    return board
}

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length -1];

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    xIsNext = { xIsNext }
                    setXIsNext = { setXIsNext }
                />
            </div>
            <div className="game-info">
                <ol></ol>
            </div>
        </div>
    );
}