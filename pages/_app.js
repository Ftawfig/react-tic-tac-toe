import Link from 'next/link';
import '../tic-tac-toe.scss';

function Header({ children }) {
    return (
        <>
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


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <div className="game">
          <Header/>
          <Component {...pageProps} />
        </div>
        </>
      );
  }