
import AuthContext from '../Contexts/app-context';
import { useContext } from 'react';
import Axios from 'axios';


function LabelOption({ children , htmlFor}) {
    
   const ctx = useContext(AuthContext);

  //  htmlFor

    const handleClick = async () => { ctx.setActive( { ...(Object.fromEntries(Object.keys(ctx.active).map((key) => [key, false]))), [htmlFor] : !ctx.active[htmlFor] } )
    const index = parseInt(htmlFor.slice(-1))
    const url_r = 'http://localhost:3000/services/'+ index;
    let response = "";
    if ([3, 4, 5].includes(index)) 
      response = await Axios.post(url_r).catch((error) => {console.log("Error accessing backend"+error);  ctx.setConsoleText(error);});
  else
    response = await Axios.get(url_r).catch((error) => {console.log("Error accessing backend"+error);  ctx.setConsoleText(error);});
    if(response)
    {const formattedJSON = JSON.stringify(response.data, null, 2); 
    console.log(formattedJSON);
    ctx.setConsoleText(formattedJSON);}
  };

    // console.log(ctx.active);


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