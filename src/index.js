import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Outlet,
  Link, 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";
import './tic-tac-toe.scss';
import Game from './tic-tac-toe';
import reportWebVitals from './reportWebVitals';
import socketClient  from "socket.io-client";

const SERVER = "ws://localhost:3000";

const root = ReactDOM.createRoot(document.getElementById('root'));

var socket = socketClient(SERVER, {transports: ['websocket']});

socket.on('connect', () => {
  console.log(`I'm connected with the back-end`);
});


socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

function Header() {
  return (
      <>
        <header>
          <h1>Tic-Tac-Toe</h1>
          <nav className="header-nav">
            <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/game">Play</Link></li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </>
  );
}

function Home() {
  return (
    <div className='home-btns column'>
        <Link to="/game"><button className='home-btn'>One-Screen</button></Link>
        <Link to="/game"><button className='home-btn'>Online</button></Link>
        <Link to="/game"><button className='home-btn'>vs. AI</button></Link>
    </div>
  );
}

root.render(
  <>
    <div className="game">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
