import React from 'react';

const Card = (prop) => {
    return (
        <div>
            <h1>Hi, My name is </h1>
            <h2>{prop.person.name}</h2>
            <p>I am this tall : {prop.person.height}cm</p>
            <p>I weigh this much : {prop.person.mass}kg</p>  
        </div>
    )
}

export default Card;