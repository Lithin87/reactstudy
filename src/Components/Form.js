import Panel from "./Panel";
import ButtonJ from "./ButtonJ";

function Form({ children }) {
    return (
      <Panel title="Welcome">
        <ButtonJ>Sign up</ButtonJ>
        <ButtonJ>Log in</ButtonJ>
      </Panel>
    );
  }

export default Form;