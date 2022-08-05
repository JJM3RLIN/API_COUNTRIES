/* MADE IT BY M3RLIN */
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Filtros from '../components/Filtros';
import ContenedorCountry from '../components/ContenedorCountry';
import styles from '../styles/Home.module.scss'

export default function Home({countries, slice}) {
     //Filtros
 const [filterName, setFilterName] = useState('');
 const [filterRegion, setFilterRegion] = useState('');
  //Arreglo que contendra los países filtrados
 const [paisesFiltrados, setPaisesFiltrados] = useState(slice);
  useEffect(()=>{
 
    if(filterName !== '' && filterRegion !== '')
    setPaisesFiltrados(countries.filter(country=>country.name.common.toLowerCase().includes(filterName) && country.region === filterRegion ));
  
    else if(filterName !== '')
      setPaisesFiltrados( countries.filter(country=>country.name.common.toLowerCase().includes(filterName) ))
    
   else if(filterRegion !== '')
      setPaisesFiltrados( countries.filter(country=>country.region === filterRegion ));
    
  }, [filterName, filterRegion, countries])

  return (
    <Layout titulo='Home'>
    <Filtros setFilterName={setFilterName} setFilterRegion={setFilterRegion} />
   <div className={styles.listado}>
    {
      paisesFiltrados.length === 0 ? <p>That Country does no exist</p> :
      paisesFiltrados.map(country =>(
        <ContenedorCountry key={country.name.official} country={country}/>
      ))
    }
   </div>

    </Layout>
  )
}
export async function getServerSideProps(){

    const url = "https://restcountries.com/v3.1/all?fields=region,capital,population,name,flags,cca3";
    const respuesta = await fetch(url);
    const countries = await respuesta.json();
   const slice = countries.slice(0,15);
  return {
    props:{
      countries,
      slice
    }
  }
}