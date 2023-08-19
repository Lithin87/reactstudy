
import './App.css';
import {useState} from 'react';
import AuthContext from './Contexts/app-context';
import Main from './Components/Main'


function App() {

  let [ active, setActive]  = useState({field1 : false,
    field2 : false,
    field3 : false,
    field4 : false,
    field5 : false,
    field6 : false,
    field7 : false,
    field8 : false});
  let [ disableStatus, setDisableStatus]  = useState(false);

 const activeCtx = {
     active: active,
     setActive : setActive,
     disableToggle : () => {  setDisableStatus(!disableStatus)}
 };

  return (
    <div className="App1">
    <AuthContext.Provider value={activeCtx}>
    
    <Main/>
    </AuthContext.Provider>
    </div>
  );

  
}


export default App;
