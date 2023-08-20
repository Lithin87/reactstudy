
// import React, { useState } from 'react';
import AuthContext from '../Contexts/app-context';
import { useContext } from 'react';

function LabelOption({ children , htmlFor}) {
    

   const ctx = useContext(AuthContext);

    const handleClick = () => { ctx.setActive( { ...(Object.fromEntries(Object.keys(ctx.active).map((key) => [key, false]))), [htmlFor] : !ctx.active[htmlFor] } )};
    console.log(ctx.active);


    const buttonStyle = {
        backgroundColor : (ctx.active[htmlFor] === false) ?  'bisque' : 'green' ,
        color: (ctx.active[htmlFor] === false) ? 'dodgerblue' : 'white',
        border: (ctx.active[htmlFor] === false) ? '3px solid blueviolet' : '1px solid green' ,
        padding: '5px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight : 'bold',
        fontSize: '17px'
      }

      
    return (
      <>
      <button  style={buttonStyle}  onClick={handleClick}>{ children } </button>
      </>
    );
  }

export default LabelOption;