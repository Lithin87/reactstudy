import {useState} from 'react';
import { useContext } from 'react';
import AuthContext from '../Contexts/app-context';


const Button = ({children}) => {

    let [ cur, setCur]  = useState(0);

    let ctx = useContext(AuthContext);

    const update = () =>  {setCur(cur+1 );    ctx.upnd(1) }  

    return (
    <div>
        <label>{children}</label>
        <button onClick={update} disabled={ctx.disablestatus}>{children}{cur}</button>
        <input placeholder='Enter here' />
    </div>)
            
} 

export default Button;




