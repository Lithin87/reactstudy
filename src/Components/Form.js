import Panel from "./Panel";
import ButtonJ from "./ButtonJ";
import { useContext } from "react";
import ThemeContext from '../Contexts/theme-context';


function Form({ children }) {

  let ctx = useContext(ThemeContext);

    return (
      <>
      <Panel title="Welcome">
        <ButtonJ>Sign up</ButtonJ>
        <ButtonJ>Log in</ButtonJ>
      </Panel>
      <label> {ctx}</label>
      
      </>
    );
  }

export default Form;