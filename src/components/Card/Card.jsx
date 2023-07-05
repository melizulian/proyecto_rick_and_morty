import style from "./card.module.css"
import { Link } from "react-router-dom";

export default function Card({id, onClose, name, status, species, gender, origin, image}) {
   return (
      <div className={style.container}>
         <button className = {style.boton} onClick={()=>{onClose(id)}}>X</button>
         <img className= {style.imagen} src={image} alt='' />
         <div className={style.containerName}>
            <Link to={`/detail/${id}`}>
               <h2 className={style.name}>{name}</h2>
            </Link>
            <h2 className={style.gender}>{gender}</h2>
         </div>
         <div className={style.containerData}>
            <h2 className={style.status}>{status}</h2>
            <h2 className={style.species}>{species}</h2>
            <h2 className={style.origin}>{origin.name}</h2>
         </div>
      
      </div>
   );
}
