import '../styles/globals.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {useRef} from 'react'

function MyApp({ Component, pageProps }) {

  const scrollTo = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 30, behavior: 'smooth' });
  };
  console.log(pageProps)
  const about = useRef();

  return (
  <>
  <Header ref={about} scrollTo={scrollTo} />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp
