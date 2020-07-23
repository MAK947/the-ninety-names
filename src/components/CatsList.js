import React from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
//returns an array
const CatsList = ({cats}) => {
    return(cats.map(cat => {
      return <Card 
      key={uuidv4()} 
      name={cat.name} 
      breed={cat.breed}
      likes={cat.likes}
      />;
    }));
}

export default CatsList;