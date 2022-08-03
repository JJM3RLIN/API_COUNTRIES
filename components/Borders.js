import Border from "./Border";
import styles from '../styles/Borders.module.scss';
const Borders = ({borders}) => {
  return (
  <section className={styles.borders}>
    <h3>Border Countries: </h3>
   <div className={styles.listBorders}>
   {
      borders.map(border=>(
    <Border key={border} border={border} />
      ))
    }
   </div>
  </section>
  )
}

export  default  Borders;