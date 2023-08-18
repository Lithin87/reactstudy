
import './App.css';
import {useState} from 'react';
import AuthContext from './Contexts/app-context';
import Main from './Components/Main'


function App() {

  let [ blr, setBlr]  = useState(0);
  let [ disableStatus, setDisableStatus]  = useState(false);

 const themes = {
     num: blr,
     disablestatus : disableStatus,
     upnd : (step) => { setBlr(blr+step) },
     disableToggle : () => {  setDisableStatus(!disableStatus)}
 };

  return (
    <div className="App1">
    <AuthContext.Provider value={themes}>
    
    <Main/>
    </AuthContext.Provider>
    </div>
  );

  
}


export default App;
