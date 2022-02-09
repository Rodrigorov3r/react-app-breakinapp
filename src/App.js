import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';


const Contendor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column; 
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400;
  }
`;

function App() {

  //state de frases
  const [frase, guardarFrase] = useState({}); //devuelve un objeto por eso {}

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes') 
    //fetch toma la url a la que vamos a hacer la consulta
    //usa el method json() que va a devolver una promesa en un objeto js, a partir de tomar un json as input. El objeto devuelto puede ser an object, an array, a string, a number...
    
    const frase = await api.json(); //lo que resuelve acá
    guardarFrase(frase[0]);
  };


  //Cargar una frase
    useEffect( () => {
      consultarAPI();
    }, [])

  return (
    <Contendor>
      <Frase
        frase = {frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>

    </Contendor>

  )
}

export default App;
