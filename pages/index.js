/* MADE IT BY M3RLIN */
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Filtros from '../components/Filtros';
import ContenedorCountry from '../components/ContenedorCountry';
import styles from '../styles/Home.module.scss'

export default function Home({countries}) {
     //Filtros
 const [filterName, setFilterName] = useState('');
 const [filterRegion, setFilterRegion] = useState('');
  //Arreglo que contendra los países filtrados
 const [paisesFiltrados, setPaisesFiltrados] = useState([]);
  useEffect(()=>{
    let filtrados = [];
    if(filterName !== '' && filterRegion !== ''){
      filtrados = countries.filter(country=>{
        if(country.name.common.toLowerCase().includes(filterName) && country.region === filterRegion){
          return country;
        }
      } );
    }
    else if(filterName !== ''){
      filtrados = countries.filter(country=>{
        if(country.name.common.toLowerCase().includes(filterName) ){
          return country;
        }
      } );
    }
   else if(filterRegion !== ''){
      filtrados = countries.filter(country=>country.region === filterRegion );
    }
 
   setPaisesFiltrados(filtrados);
  }, [filterName, filterRegion])
  return (
    <Layout titulo='Home'>
    <Filtros setFilterName={setFilterName} setFilterRegion={setFilterRegion} />
   <div className={styles.listado}>
    {
      filterName !== '' || filterRegion !== '' ?
      paisesFiltrados.length === 0 ? <p>That county doesn&apos;t exist</p> :
      paisesFiltrados.map(country =>(
        <ContenedorCountry key={country.name.official} country={country} />
      ))

      :
      countries.map(country =>(
        <ContenedorCountry key={country.name.official} country={country} />
      ))
    }
   </div>
    </Layout>
  )
}
export async function getServerSideProps(){

    const url = "https://restcountries.com/v3.1/all";
    const respuesta = await fetch(url);
    const countries = await respuesta.json();

  return {
    props:{
      countries
    }
  }
}