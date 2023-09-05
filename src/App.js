
import './App.css';
import {useState} from 'react';
import AuthContext from './Contexts/app-context';
import Main from './Components/Main'
import ConsoleOutput from './Components/ConsoleOutput';
import MultiLineText from './Components/MultiLineText';

function App() {

  let [ active, setActive]  = useState(
    {field1 : false,
    field2 : false,
    field3 : false,
    field4 : false,
    field5 : false,
    field6 : false,
    field7 : false,
    field8 : false});
  let [ consoleText, setConsoleText]  = useState();
  let [ disableStatus, setDisableStatus]  = useState(false);
  const [text, setText] = useState('');

 const activeCtx = {
     active: active,
     setActive : setActive,
     disableToggle : () => {  setDisableStatus(!disableStatus)},
      consoleText : consoleText ,
      setConsoleText : setConsoleText,
      text : text,
      setText : setText
 };

  return (

    <div className="App">
    <AuthContext.Provider value={activeCtx}>
    
    <div class="column">
    <Main/>
    <MultiLineText/>
    </div>
   
    <ConsoleOutput/>

    </AuthContext.Provider>
    </div>
  );

  
}


export default App;
