import { useReducer, useState} from 'react';
import { useRouter  } from 'next/router';
import Link from 'next/link';

export function randomString() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default function Online() {
    const [join, setJoin] = useState(false);
    const [joinCode, setJoinCode] = useState("");
    const router = useRouter();

    const handleChange = (event) => {
      setJoinCode(event.target.value);
    }

    function handleClick() {
      setJoin(true);
    }

    function handleSubmit(joinCode) {
      console.log(joinCode);
      router.push('/multiplayer?gameId=' + joinCode);
    }
  
    return (
      <div className='home-btns column'>
          <Link href={"/multiplayer?gameId=" + randomString()}><button className='home-btn'>Start Game</button></Link>
          <button onClick={ handleClick } className='home-btn'>Join Game</button>
          { join ?
            <>
              <h3>Enter Join Code:</h3>
              <input onInput={e => setJoinCode(e.target.value)} className="join-code" placeholder="Game Id"/>
              <button className='home-btn' onClick={ handleSubmit }> Submit</button>
            </>
           : null }
      </div>
    );
  }