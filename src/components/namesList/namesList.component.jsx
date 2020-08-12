import React from 'react';
import Card from '../card/card.component';
import { v4 as uuidv4 } from 'uuid';
//returns an array
const NamesList = ({names}) => {
    return(names.map(name => {
      return <Card
      key={uuidv4()} 
      name={name.name} 
      meaning={name.meaning}
      url={name.url}
      transliteration={name.transliteration}
      />;
    }));
}

export default NamesList;