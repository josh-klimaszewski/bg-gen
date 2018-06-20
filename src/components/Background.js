import React from 'react';

const Background = ({angle, base, gradient}) => {
    let style = {
        backgroundImage: 'linear-gradient(' + angle + ', ' + base + ', ' + gradient + ')',
        minHeight: '50vh',
        
    }
       
    return (
        <div 
        style={style}
        />
           
       )
   
};
export default Background;