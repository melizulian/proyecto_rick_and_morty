import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';


function App() {

   const [characters, setCharacters] = useState ([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id)
      }))
   }

   return (
      <div className = "App">
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path="/about" element = {<About />} />
            <Route path="/home" element = {<Cards characters={characters} onClose={onClose} />} />
            <Route path="/detail/:id" element = {<Detail />} />
         </Routes>
         
         
      
      </div>
   );
}

export default App;
