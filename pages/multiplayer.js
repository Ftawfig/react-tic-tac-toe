import { Board } from "./tic-tac-toe";
import { useEffect, useState} from 'react';
import io from "socket.io-client"
import { useRouter } from 'next/router'

const hostname = 'https://tictactoe.faditawfig.com';

const socket = io.connect(hostname, { transports: ["websocket"] });

export function MultiplayerGame() {
    //get gameId from URL parameter and join room
    const router = useRouter();
    const { gameId } = router.query;

    //empty dependency array = called once when component is registered
    useEffect(() => { 
        socket.emit('join', gameId);
    }, []);
    
    //X starts first
    const [xIsNext, setXIsNext] = useState(true);
    const [iAmX, setIAmX] = useState(null);
    const [gameActive, setgameActive] = useState(false);

    console.log(`xIsNext ${xIsNext}`);
    console.log(`iAmX ${iAmX}`);

    let myTurn = null;

    if (iAmX && xIsNext) {
        myTurn = true;
    } else if (!iAmX && !xIsNext) {
        myTurn = true;
    } else if (iAmX != null) {
        myTurn = false;
    }

    console.log(`myTurn ${myTurn}`);
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    var currentSquares = history[currentMove];
    console.log(`current move: ${currentMove}`);

    useEffect(() => {
        socket.on("start_game", (data) => {
            console.log("start game");
            setIAmX(data);
            setgameActive(true);
        });

        socket.on("receive_turn", (data) => {
            console.log("******************* RECEIVED TURN ****************************");
            const newHistory = data.turn;

            setXIsNext((prevState) => {
                return !prevState;
            });

            setHistory(newHistory);
            setCurrentMove(newHistory.length -1);
        });
    }, [socket]);

    const [outbound, setOutbound] = useState(null);

    useEffect(() => {
        if(gameActive && myTurn != false){
            console.log("******************* SENDING TURN ****************************");
            socket.emit("send_turn", { turn : history }); 

            setXIsNext((prevState) => {
                return !prevState;
            });
        }
    }, [outbound]);


    function handlePlay(newSquares) {
        const newHistory = [...history.slice(0, currentMove + 1), newSquares];
        setHistory(newHistory);
        setOutbound(newHistory.splice());
        setCurrentMove(newHistory.length -1);
    }

    //jumps back in history to a certain move
    function jumpTo(moveNum) {
        setCurrentMove(moveNum);
    }

    //keeps a history of moves and returns them as list items
    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description  = "Move #" + move;
        } else {
            description  = "Beginning";
        }

        return (
            <li>
                <button onClick={ () => jumpTo(move)}>{ description }</button>
            </li>
        );
    });

    let turnStatus;

    if(myTurn == null ){
        turnStatus = "Waiting for opponent...";
    } else if(myTurn) {
        turnStatus = "Your Turn";
    } else {
        turnStatus = "Opponent's Turn";
    }

    return (
        <>
            <h2>{ turnStatus }</h2>
            <h3 style={{"text-align" : "center"}}>
                Room Code: { gameId }
                <a href="javascript:void(0);" onClick={() => {navigator.clipboard.writeText(hostname + "/multiplayer?gameId=" + gameId)}} ><br/>
                    Click to Copy Invite Link <span class="material-symbols-outlined">content_copy</span>
                </a>
            </h3>
            <div className={"game-board" +  (myTurn == null ? " hidden" : "")} > 
                    <Board 
                        xIsNext = { xIsNext }
                        squares = { currentSquares }
                        onPlay = { 
                            myTurn ? handlePlay : () => {return null}
                        }
                        setgameActive = { setgameActive }
                    />
            </div>
            <div className= { "game-info" + (gameActive || myTurn == null ? " hidden" : "") }>
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