import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {
    return (
        <div className="bg-light-blue br4 card">
            <img className="card__image bg-dark-blue br-100" alt={name} src={`https://robohash.org/${id}?size=200x200`}/>
            <h2 className="card__name" >{name}</h2>
            <p className="card__email" >{email}</p>
        </div>
    )
}

export default Card;