
import ConsoleOutput from './ConsoleOutput';
import Form from './Form';
import SixLabelForm from './SixLabelForm';
import ThemeContext from '../Contexts/theme-context';


function Main() {


const theme = "light";

  return (
    <div>

     <ThemeContext.Provider value={theme}>
     <Form/>
     </ThemeContext.Provider>

     <SixLabelForm />
     <ConsoleOutput/>

    </div>
  );
}

export default Main;
