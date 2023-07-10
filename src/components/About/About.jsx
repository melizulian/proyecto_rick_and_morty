import style from "./about.module.css"
import Card from "../Card/Card";
import miImagen from "../About/melina.JPG"

const imagen = miImagen;

const About = () => {
    return(
        <div className={style.about}>
            <h1 className={style.titulo}>ABOUT ME</h1>
            <h2>Melina Rodriguez</h2>
            <br />
            <div className={style.card}>
            <Card 
            key = {"9999"}
            id = {'1805'}
            name = {'Melina Rodriguez'}
            status = {'Alive'}
            species = {'human'}
            gender = {'female'}
            origin = {'earth'}
            image = {imagen}
            />
            </div>
        </div>
        
    )
}

export default About;