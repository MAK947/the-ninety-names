import Loader from 'react-loader-spinner';
import React from 'react';
const LoadScreenIcon = () => {
    return (
        <Loader
         type="BallTriangle"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={1000000}
      />
    )
}

export default LoadScreenIcon;
