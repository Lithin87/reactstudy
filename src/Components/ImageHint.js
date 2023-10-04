import AuthContext from '../Contexts/app-context';
import { useContext } from 'react';
import help from '../images/help.png';



function ImageHint({ htmlFor}) {
    
   const ctx = useContext(AuthContext);

   
   const handleClick = async () => {
   const df= { "schema" : "scscscsc" }


    const formattedJSON = JSON.stringify(df, null, 2); 
    ctx.setText(formattedJSON);
  };


      
    return (
      <>
      <img src={help} htmlFor="field1" alt="field1"  onClick={handleClick} className='tiny-image'></img>
      </>
    );
  }

export default ImageHint;