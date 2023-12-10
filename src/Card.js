import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div>
            <img alt={name} src={`https://robohash.org/${id}?size=200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;