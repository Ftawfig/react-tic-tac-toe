import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Game from './tic-tac-toe';
import MultiplayerGame from './multiplayer';
import Link from 'next/link';

//const root = ReactDOM.createRoot(document.getElementById('root'));


function Home() {
  return (
    <div className='home-btns column'>
        <Link href="/tic-tac-toe"><button className='home-btn'>One-Screen</button></Link>
        <Link href="/multiplayer"><button className='home-btn'>Online</button></Link>
        <Link href="/tic-tac-toe"><button className='home-btn'>vs. AI</button></Link>
    </div>
  );
}

function OnlineMenu() {
  const [join, setJoin] = useState(false);
  
  function handleClick() {
    console.log("setJoin")
    setJoin(true);
  }

  return (
    <div className='home-btns column'>
        <Link to="/multiplayer"><button className='home-btn'>Start Game</button></Link>
        <button onClick={ handleClick } className='home-btn'>Join Game</button>
        { join ?
          <>
            <input className="join-code" placeholder="Game Id"/>
            <button className='home-btn'> Submit</button>
          </>
         : null }
    </div>
  );
}

export default function App() {
  return (
      <Home />
  );
}


//root.render(
//  <>
//    <div className="game">
//      <BrowserRouter>
//      <Routes>
//        <Route path="/" element={<Header />}>
//          <Route index element={<Home />} />
//          <Route path="game" element={<Game />} />
//          <Route path="multiplayer" element={<MultiplayerGame />} />
//          <Route path="online" element={<OnlineMenu />} />
//        </Route>
//      </Routes>
//    </BrowserRouter>
//    </div>
//  </>
//);