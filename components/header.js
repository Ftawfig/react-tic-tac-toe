import Link from 'next/link';
import Head from 'next/head';
import { randomString } from '../pages/online';

export default function Header({ children }) {
    return (
        <>
            <Head>
                <title>React Tic-Tac-Toe</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </Head>
            <header>
              <h1>Tic-Tac-Toe</h1>
              <nav className="header-nav">
                <ul>
                     <li><Link href="/">Home</Link></li>
                     <li><Link href="/tic-tac-toe">Play</Link></li>
                     <li><Link href={"/multiplayer?gameId=" + randomString()}>Online</Link></li>
                </ul>
              </nav>
            </header>
            <main>{children}</main>
        </>
    );
  }