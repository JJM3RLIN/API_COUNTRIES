import Head from "next/head";
import styles from '../styles/Layout.module.scss';
const Layout = ({titulo, children}) => {
  return (
    <>
    <Head>
        <title>Countries | {titulo}</title>
        <meta name="description" content="This web show you all the countries in the world and its information"  />
        <meta name="author" content="Jorge M3rlin"  />
        <link rel="icon" href= "/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" crossOrigin  href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet" />
      </Head>
    <header className={`${styles.header} mode`}>

      <div className={styles.contenidoHeader}>
        <h1>Where in the world?</h1>
        <button onClick={()=>document.querySelector('body').classList.toggle('darkMode')} className={styles.darkModeBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className={`${styles.biDarkMode} biDark`} viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
          <span>Dark Mode</span>
        </button>
      </div>
    </header>

  <main className='contenedor'>
   {children}
  </main>

    </>
  )
}

export default Layout