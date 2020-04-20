// Write your Character component here
import React, { useState, useEffect } from 'react';
import Characters from './components/Character';
import axios from 'axios'



function Home() {
    const [dataState, setDataState] = useState('');

    useEffect(() => {
        const fetchSWData = () =>
            axios.get(`https://swapi.py4e.com/api/people/1/`)
                .then(response => {
                    console.log(response.data);
                    setDataState(response.data);

                })
                .catch(err => {
                    console.log(err, "this is the error")
                });

        fetchSWData();

    }, [])
    //console.log(date)

    return (

        <Characters className="SW-obj">
            <div 
            
                name={"Andre"}
                species={dataState.species}
                homeworld={dataState.homeworld}
                films={dataState.films}
            

            />
        </Characters>

    )
}



export default Home
