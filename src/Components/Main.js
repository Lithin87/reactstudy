
// import Button from './Button'


import Form from './Form';
import SixLabelForm from './SixLabelForm';
import ThemeContext from '../Contexts/theme-context';


function Main() {

  // const jk = ["Sohan","mohan", "ravi","chandra","Lithin"]
  // const object = {
  //   first: 1,
  //   second: 2,
  //   third: 3,
  // };

const theme = "light";

  return (
    <div>
{

/* 
     {  jk.map( s => (<Button> {s} </Button>) ) }  
     {  Object.keys(object).map( s => (<Button> {s} </Button>)  ) }   */}

     {/* <button onClick={ctx.disableToggle} > DISABLE </button>)
     <br></br>
     <label> {ctx.num}</label> */}

     <ThemeContext.Provider value={theme}>
     <Form/>
     </ThemeContext.Provider>

     <SixLabelForm />

    </div>
  );
}

export default Main;
