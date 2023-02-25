import Link from 'next/link';
import Head from 'next/head';

export default function Header({ children }) {
    return (
        <>
            <Head>
                <title>React Tic-Tac-Toe</title>
            </Head>
            <header>
              <h1>Tic-Tac-Toe</h1>
              <nav className="header-nav">
                <ul>
                     <li><Link href="/">Home</Link></li>
                     <li><Link href="/tic-tac-toe">Play</Link></li>
                     <li><Link href="/multiplayer">Online</Link></li>
                </ul>
              </nav>
            </header>
            <main>{children}</main>
        </>
    );
  }