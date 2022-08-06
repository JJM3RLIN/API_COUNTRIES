import Image from "next/image";
import Link from 'next/link';
import Router from 'next/router';
import styles from '../styles/ContenedorCountry.module.scss';
const ContenedorCountry = ({country}) => {
  
    const {region, capital, population, name, flags, cca3} = country;
    const cortarLongitudString = (string)=>{
      if(!string) return '';
  if(string.length  > 15){
        let aux = string.split('', 15).join('').trim();  
      return aux + "...";
  }
  return string;
    }
  
  return (
    <div className={`${styles.card} mode`} onClick={()=>Router.push(`/country/${name.common}`)}>
  
     <div className={styles.imagen}>
     <Image layout="intrinsic" loading="lazy" width={320} height={180}  src={flags.svg} alt={`${name.common} flag`}/>
     </div>
  
    <Link href={`/country/${name.common}`} >
    <p className={styles.nombre}>{cortarLongitudString(name.common)}</p>
    </Link>
      <p>Population: <span>{population.toLocaleString('en-US')}</span></p>
      <p>Region: <span>{region}</span></p>
      <p>Capital: <span>{cortarLongitudString(capital[0])}</span></p>

    </div>
  )
}

export default ContenedorCountry