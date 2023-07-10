import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';



function App() {

   const [characters, setCharacters] = useState ([]);

   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const EMAIL = "melizulian@hotmail.com"
   const PASSWORD = "abc123"


   useEffect(() => {
      if (!access) {
        navigate('/');
      }
    }, [access, navigate]);

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

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

   const location = useLocation();

   const isLandingPage = location.pathname === '/';

   return (
      <div className = "App">
         {!isLandingPage && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/about" element = {<About />} />
            <Route path="/home" element = {<Cards characters={characters} onClose={onClose} />} />
            <Route path="/detail/:id" element = {<Detail />} />
            <Route path="/" element = {<Form login={login}/>}/>
         </Routes>
         
         
      
      </div>
   );
}

export default App;
