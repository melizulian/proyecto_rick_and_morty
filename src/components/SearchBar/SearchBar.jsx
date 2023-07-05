import style from './searchBar.module.css'
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value);
   }
   return (
      <div className={style.container}>
         <div className={style.containerItems}>
         <input className={style.input}  type='search' onChange={handleChange} value={id} />
         <button className={style.button} onClick={() => {onSearch(id)}}>Agregar</button>
         </div>
      </div>
   );
}
