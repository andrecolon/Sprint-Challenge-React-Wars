// Write your Character component here
import React from 'react';
import { StyledCards } from './styles/StyledCards'




const Characters = props => {
    const { person, type, eyes, gender } = props

    return (
        <StyledCards >
            <div className="container">
                <h1>{person}</h1>
                <h2>Skin: {type}</h2>
                <p><strong>Gender: {gender}, Color: {eyes}</strong></p>
               
            </div>
        </StyledCards>

    )

}

export default Characters
