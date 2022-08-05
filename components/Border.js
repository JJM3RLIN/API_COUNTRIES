import Link from "next/link";
const Border = ({border}) => {
  return (
    <Link href={`/country/${border}`}>
       <a href="#" className="box">{border}</a>
    </Link>
  )
}

export default Border