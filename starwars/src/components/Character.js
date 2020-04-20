import React from 'react';
import { StyledCards } from './styles/StyledCards'



const Characters = props => {
  const {name, homeworld, species, films } = props
  return(
      <StyledCards >
        <div className="container">
            <h1>HELLO STAR WARS</h1>
            <h1>{name}</h1>
            <p>{species}</p>
            <p>{homeworld}</p>
            {/* <ul className="star-war-films">
                {films.map((film, index) =>(
                    <li key={index}>{film}</li> 
            ))}   
            </ul> */}

        </div>
      </StyledCards>

  )
    
}

export default Characters
