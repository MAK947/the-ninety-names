import React from 'react';
import Card from './card.component';
import { v4 as uuidv4 } from 'uuid';
//returns an array
const NamesList = ({names}) => {
    return(names.map(name => {
      return <Card 
      key={uuidv4()} 
      name={name.name} 
      meaning={name.meaning}
      watch={name.watch}
      info={name.info}
      />;
    }));
}

export default NamesList;