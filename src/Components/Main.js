

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
    </div>
  );
}

export default Main;
