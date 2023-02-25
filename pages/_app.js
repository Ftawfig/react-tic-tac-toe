import Header from '../components/header';
import Footer from '../components/footer';
import '../tic-tac-toe.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <div className="game">
          <Header/>
          <Component {...pageProps} />
        </div>
        <div className='bg'/>
        <Footer/>
        </>
      );
  }