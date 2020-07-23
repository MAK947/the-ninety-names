//React must be in scope when using JSX
import React from "react";

const Card = ({name,breed,likes}) => {

    return (<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${name}?set=set4&size=200x200`} alt={name} />
        <div>
            <h2>{name}</h2>
            <p>Breed: <strong>{breed}</strong></p>
            <p>Likes: <strong>{likes}</strong></p>
        </div>
    </div>);
};

export default Card;
