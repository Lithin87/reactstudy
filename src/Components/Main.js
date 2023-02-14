
import Button from './Button'
import { useContext } from 'react';
import AuthContext from '../Contexts/app-context';
import Form from './Form';
import ThemeContext from '../Contexts/theme-context';


function Main() {

  const jk = ["Sohan","mohan", "ravi","chandra","Lithin"]
  const object = {
    first: 1,
    second: 2,
    third: 3,
  };

  let ctx = useContext(AuthContext);
const theme = "light";

  return (
    <div>

     {  jk.map( s => (<Button> {s} </Button>) ) }  

     {  Object.keys(object).map( s => (<Button> {s} </Button>)  ) }  

     <button onClick={ctx.disablefn} > DISABLE </button>)
     <br></br>
     <label> {ctx.num}</label>


     <ThemeContext.Provider value={theme}>
     <Form/>
     </ThemeContext.Provider>

    </div>
  );
}

export default Main;
