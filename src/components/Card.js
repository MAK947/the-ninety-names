//React must be in scope when using JSX
import React from "react";

const Card = ({name,meaning,watch,info}) => {

    return (<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`../src/img/${name}.png`} alt={name} />
        <div>
            <h2>{name}</h2>
            <p>Meaning: <strong>{meaning}</strong></p>
            <p>Watch: <strong>{watch}</strong></p>
            <p>{info}</p>
        </div>
    </div>);
};

export default Card;
