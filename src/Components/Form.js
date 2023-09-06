import Axios from 'axios';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../Contexts/app-context';

function Form() {

  const ctx = useContext(AuthContext);


  const backendHost = process.env.REACT_APP_BACKEND_HOST;
  const url_r = backendHost + '/services/ipaddress';

  useEffect(() => {
    Axios.get(url_r).then(response => {if(response.data === "") ctx.setData("off"); else ctx.setData(response.data);  })
      .catch(error => {
        console.error('IP Address fetch went wrong!', error);
      });
  }, [url_r, ctx]); 



    return (
      <>
      <a href={ctx.data} target="_blank" rel="noopener noreferrer"> <label>KAFKA CONTROL CENTER : {ctx.data}</label> </a>
      </>
    );
  }

export default Form;