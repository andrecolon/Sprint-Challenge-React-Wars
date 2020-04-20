import React from 'react';
import { StyledCards } from './styles/StyledCards'




const Characters = props => {
    const { person, type, eyes, gender } = props
    
  return(
      <StyledCards >
        <div className="container">
            <h1>HELLO STAR WARS</h1>
              <h1>{person}</h1>
              <h2>Skin: {type}</h2>
              <p><strong>Gender: {gender}, Color: {eyes}</strong></p>
              {/* <button onClick={() => setDataState("Random")}>random sw people </button> */}
        </div>
      </StyledCards>

  )
    
}

export default Characters
