// Write your Character component here
import React, { useState, useEffect } from 'react';
import Characters from './components/Character';
import axios from 'axios'

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



function Home() {
    const [dataState, setDataState] = useState([{}]);
    useEffect(() => {
        const fetchSWData = () =>
            axios.get('https://swapi.py4e.com/api/people/')
                .then(response => {
                    console.log(response.data.results);
                    setDataState(response.data.results);
                })
                .catch(err => {
                    console.log(err, "this is the error")
                });

        fetchSWData();

    }, ['https://swapi.py4e.com/api/people/']);

    return (
<div>
    <h1>Star Wars Characters</h1>
            {dataState.map((character, index)=>{
                
    return <Characters key={index} person={character.name} type={character.skin_color} eyes={character.eye_color} gender={character.gender} />
                console.log(Characters)
})}
        </div>
    );
}

export default Home