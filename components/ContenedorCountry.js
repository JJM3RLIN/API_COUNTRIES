import Image from "next/image";
import Link from 'next/link';
import Router from 'next/router';
import styles from '../styles/ContenedorCountry.module.scss';
const ContenedorCountry = ({country}) => {
    const {region, capital, population, name, flags, cca3} = country;
  return (
    <div className={`${styles.card} mode`} onClick={()=>Router.push(`/country/${cca3}`)}>
  
     <div className={styles.imagen}>
     <Image layout="intrinsic" loading="lazy" width={320} height={180}  src={flags.svg} alt={`${name.common} flag`}/>
     </div>
  
    <Link href={`/country/${cca3}`} >
    <p className={styles.nombre}>{name.common}</p>
    </Link>
      <p>Population: <span>{population.toLocaleString('en-US')}</span></p>
      <p>Region: <span>{region}</span></p>
      <p>Capital: <span>{capital}</span></p>

    </div>
  )
}

export default ContenedorCountry