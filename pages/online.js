import { useState} from 'react';
import Link from 'next/link';

export function randomString() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default function Online() {
    const [join, setJoin] = useState(false);
    
    function handleClick() {
      console.log("setJoin")
      setJoin(true);
    }
  
    return (
      <div className='home-btns column'>
          <Link href={"/multiplayer?gameId=" + randomString()}><button className='home-btn'>Start Game</button></Link>
          <button onClick={ handleClick } className='home-btn'>Join Game</button>
          { join ?
            <>
              <h3>Enter Join Code:</h3>
              <input className="join-code" placeholder="Game Id"/>
              <button className='home-btn'> Submit</button>
            </>
           : null }
      </div>
    );
  }