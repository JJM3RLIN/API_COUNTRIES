import Layout from '../../components/Layout';
import  Borders  from '../../components/Borders';
import Image from 'next/image';
import Link from 'next/link';
import formatoNumero from '../../helpers/formatoNumeros';
import styles from '../../styles/Country.module.scss';
const Country = ({country}) => {

    const {name, capital, population, region, flags, subregion, tld, currencies, languages, borders, altSpellings} = country[0];
    const moneda = currencies ? Object.values(currencies)[0] : '';


  return (
    <Layout titulo={name.common} icono={flags.svg}> 
        <div className='contenedor'>
           <Link href='/'>
            <a href='#' className={`box ${styles.enlaceBack}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
               <path  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
               </svg>
               Back</a>
            </Link>
           <div className={styles.contenido}>
            <div>
            <Image src={flags.svg} width={600} height={400} alt={`${name.common} flag`} priority layout='responsive' />
            </div>
            <div className={styles.contenedorInfo}>
              <section className={styles.info}>
               <h2 className={styles.nombre}>{name.common}</h2>
                <p>Native Name: <span>{altSpellings[2] ?? name.common}</span></p>
                <p>Population: <span>{formatoNumero(population)}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Sub Region: <span>{subregion ?? "This country hasn't Sub Region"}</span></p>
                <p>Capital: <span>{capital ?? "This country hasn't capital"}</span></p>
              </section>

              <section className={`${styles.info} ${styles.InfoSecond}`}>
                {
                  tld && <p >Top Level Domain: <span>{tld[0]}</span></p>
                }
                <p>Currencie: <span>{moneda.name ??  "This country hasn't currencie"}</span></p>
                {
                  moneda?.symbol &&  <p>Currencie symbol: <span>{moneda.symbol}</span></p>
                }
                {languages &&
                  <p>Lenguages:  
                  {' '}<span>
                  {
                    Object.values(languages).join(', ')
                  }
                  </span>
                </p>
                }
              </section>
               {
               country[0]?.borders && (
                <Borders borders={borders} />
               )
               }
            </div>
           </div>
        </div>
    </Layout>
  )
}
export async function getStaticPaths() {
  //Todos los valores de la API para que haga las paginas y sea mas rapido
  const url = 'https://restcountries.com/v3.1/all';
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
//ya que las rutas se basan en el nombre
  const paths = resultado.map(countrie =>({
    params:{id:countrie.name.common}
  }));
  //Retornamos la rutas
  return{
      paths,
      fallback: false
  }
  }
  
  //Obtenemos automaticamente el id de la url
  export async function getStaticProps({ params:{id} }) {
    const url = `https://restcountries.com/v3.1/name/${id}`;
    const respuesta = await fetch(url);
    const country = await respuesta.json();
    return {
        props:{
           country
        }
    }
  }
export default Country;