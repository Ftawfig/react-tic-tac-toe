import { Board } from "./tic-tac-toe";
import { useEffect, useState} from 'react';
import io from "socket.io-client"
import { useRouter } from 'next/router'

const socket = io.connect("http://localhost:3000");

export function MultiplayerGame() {
    const router = useRouter();
    
    //get gameId from URL parameter and join room
    const { gameId } = router.query;
    socket.emit('join', gameId);

    const [players, setPlayers] = useState(0);

    //true if X's turn is next, false if O is next. Randomized at init
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [myTurn, setMyTurn] = useState(true);

    var currentSquares = history[currentMove];
    console.log(`current move: ${currentMove}`);

    useEffect(() => {
        socket.on("receive_turn", (data) => {
            const newHistory = data.turn;
            
            console.log(`history length: ${history.length}`);
            console.log(history);
            console.log(`newHistory length: ${newHistory.length}`);
            console.log(history);
            if (newHistory.length > history.length) {
                console.log('history changed');
                setHistory(newHistory);
            }
            
            setCurrentMove(newHistory.length -1);
            setXIsNext(!xIsNext);
        });
    }, [socket]);

    useEffect(() => {
        console.log("history change hook");
        socket.emit("send_turn", { turn : history }); 
    }, [history]);


    function handlePlay(newSquares) {
        const newHistory = [...history.slice(0, currentMove + 1), newSquares];
        setHistory(newHistory);
        setCurrentMove(newHistory.length -1);
        setXIsNext(!xIsNext);
    }

    //jumps back in history to a certain move
    function jumpTo(moveNum) {
        setHistory(history.slice(0, moveNum + 1));
        setCurrentMove(moveNum);
    }

    //keeps a history of moves and returns them as list items
    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description  = "Move #" + move;
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
            <h2>{`Room Code: ${ gameId } `}</h2>
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
        </>
    );
}

MultiplayerGame.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }
 
 export default MultiplayerGame;