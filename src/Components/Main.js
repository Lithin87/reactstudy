
import ConsoleOutput from './ConsoleOutput';
import Form from './Form';
import MenuOption from './MenuOption';
import ThemeContext from '../Contexts/theme-context';


function Main() {


const theme = "light";

  return (
    <div>

     <ThemeContext.Provider value={theme}>
     <Form/>
     </ThemeContext.Provider>

     <MenuOption />
     <ConsoleOutput/>

    </div>
  );
}

export default Main;
