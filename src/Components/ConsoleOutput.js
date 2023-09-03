import AuthContext from '../Contexts/app-context';
import { useContext } from 'react';

function ConsoleOutput() {

  const ctx = useContext(AuthContext);

  return (
    <div>
      <h2>Console Output</h2>
      <textarea
        value={ctx.consoleText}
        rows={40} 
        cols={120} 
      />
    </div>
  );
}

export default ConsoleOutput;
