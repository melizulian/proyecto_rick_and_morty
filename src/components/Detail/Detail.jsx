import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import style from "./detail.module.css"


const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    //  useEffect(()=>{console.log(character)}, [character])

    return(
        <div className = {style.container}>
            {character.name !== undefined ? (
        <Card
          key={id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin?.name}
          image={character.image}
        />
      ) : (
        <h1>Cargando</h1>
      )}
        </div>
    )
}

export default Detail;