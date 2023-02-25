import { React, useEffect, useState } from 'react';
import Link from 'next/link';

//const root = ReactDOM.createRoot(document.getElementById('root'));


function Home() {
  return (
    <div className='home-btns column'>
        <Link href="/tic-tac-toe"><button className='home-btn'>One-Screen</button></Link>
        <Link href="/online"><button className='home-btn'>Online</button></Link>
        <Link href="/tic-tac-toe"><button className='home-btn'>vs. AI</button></Link>
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