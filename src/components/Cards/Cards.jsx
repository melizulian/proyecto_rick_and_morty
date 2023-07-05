import Card from "../Card/Card";
import style from "./cards.module.css";

export default function Cards(props) {
   // const onClose = () => window.alert('Emulamos que se cierra la card');
   const {characters, onClose} = props;
   
   return (
   <div className = {style.container}>
      <h1>CARDS</h1>
      {characters.map(({id, name, status, species, gender, origin, image}) => {
         return (
            <Card 
            key = {id}
            id = {id}
            name = {name}
            status = {status}
            species = {species}
            gender = {gender}
            origin = {origin.name}
            image = {image}
            onClose = {onClose}
            />
            );
         })}
   </div>
   );
}
