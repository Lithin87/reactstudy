
import './App.css';
import { useState } from 'react';
import AuthContext from './Contexts/app-context';
import ConsoleOutput from './Components/ConsoleOutput';
import MultiLineText from './Components/MultiLineText';
import VMImage from './Components/VMImage';
import Form from './Components/Form';
import MenuOption from './Components/MenuOption';

const fieldsALL = {
  field1: false,
  field2: false,
  field3: false,
  field4: false,
  field5: false,
  field6: false,
  field7: false,
  field8: false
};

function App() {

  let [active, setActive] = useState(fieldsALL);
  let [consoleText, setConsoleText] = useState();
  let [disableStatus, setDisableStatus] = useState(false);
  const [text, setText] = useState('');
  const [data, setData] = useState("Kafka VM Not Created");

  const activeCtx = {
    active: active,
    setActive: setActive,
    consoleText: consoleText,
    setConsoleText: setConsoleText,
    disableToggle: () => { setDisableStatus(!disableStatus) },
    text: text,
    setText: setText,
    data: data,
    setData: setData
  };

  return (
    <div className="App">
      <AuthContext.Provider value={activeCtx}>

        <div className="columnpane">

          <div className="optionpane">
            <MenuOption />
            <div className="vmpane">
              <Form />
              <VMImage />
            </div>

          </div>

          <MultiLineText />
        </div>

        <ConsoleOutput />

      </AuthContext.Provider>
    </div>
  );

}


export default App;
