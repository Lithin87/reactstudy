import React , { useContext } from 'react';
import AuthContext from '../Contexts/app-context';


function MultiLineText() {
 
  const ctx = useContext(AuthContext);

  const handleInputChange = (event) => {
    ctx.setText(event.target.value);
  };

  return (
    <div>
      <h2>INPUT TEXT</h2>
      <textarea
        value={ctx.text}
        onChange={handleInputChange}
        rows={32} 
        cols={100} 
      />
   
    </div>
  );
}

export default MultiLineText;
