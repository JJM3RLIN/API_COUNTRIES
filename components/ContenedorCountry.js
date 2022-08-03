import Image from "next/image";
import Link from 'next/link';
import Router from 'next/router';
import formatoNumero from "../helpers/formatoNumeros";
import styles from '../styles/ContenedorCountry.module.scss';
const ContenedorCountry = ({country}) => {
    const {region, capital, population, name, flags} = country;
  return (
    <div className={`${styles.card} mode`} onClick={()=>Router.push(`/country/${name.common}`)}>
  
      <Image width={75} height={40} layout='responsive' priority  src={flags.png} alt={`${name.common} flag`}/>
    
    <div className={styles.info}>
    <Link href={`/country/${name.common}`} >
    <p className={styles.nombre}>{name.common}</p>
    </Link>
      <p>Population: <span>{formatoNumero(population)}</span></p>
      <p>Region: <span>{region}</span></p>
      <p>Capital: <span>{capital}</span></p>
    </div>
    </div>
  )
}

export default ContenedorCountry