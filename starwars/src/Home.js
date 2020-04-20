// Write your Character component here
import React, { useState, useEffect } from 'react';
import Characters from './components/Character';
import axios from 'axios'


let randomNumber = Math.floor((Math.random() * 88) + 1)
let API = 'https://swapi.py4e.com/api/people/' + randomNumber
function Home() {
    const [dataState, setDataState] = useState('');
    useEffect(() => {
        const fetchSWData = () =>

            axios.get(API)
                .then(response => {
                    
                    setDataState(response.data);
                    console.log(response.data);
                })
                .catch(err => {
                    console.log(err, "this is the error")
                });

        fetchSWData();

    }, [])

    return (

        <Characters className="SW-obj"
            
            person={dataState.name}
            type={dataState.skin_color}
            eyes={dataState.eye_color}
            gender={dataState.gender}
            // id={dataState.id}
        />
        
    )
}

export default Home
