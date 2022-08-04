import { useEffect } from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    const tieneDark = window.matchMedia( '(prefers-color-scheme: dark )' );
    if(tieneDark.matches) { 
      document.body.classList.add('darkMode'); 
    }
    else{
        document.body.classList.remove('darkMode');
    }
    //cambiar cuando el sistema tambien cambie de modo
    tieneDark.addEventListener('change', ()=>{
        if(tieneDark.matches) { 
            document.body.classList.add('darkMode'); 
          }
          else{
              document.body.classList.remove('darkMode');
          }
        })
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
