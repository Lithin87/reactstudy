import AuthContext from '../Contexts/app-context';
import { useContext } from 'react';

function ConsoleOutput() {

  const ctx = useContext(AuthContext);

  return (
    <div>
      <h2>CONSOLE OUTPUT</h2>
      <textarea
        value={ctx.consoleText}
        rows={30} 
        cols={120} 
      />
    </div>
  );
}

export default ConsoleOutput;
