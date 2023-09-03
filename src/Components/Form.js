import Axios from 'axios';
import React, { useState, useEffect } from 'react';

  
function Form() {

  const [data, setData] = useState("Kafka VM Not Created");

  const backendHost = process.env.REACT_APP_BACKEND_HOST;
  const url_r = backendHost + '/services/ipaddress';

  useEffect(() => {
    Axios.get(url_r).then(response => {  setData(response.data);  })
      .catch(error => {
        console.error('IP Address fetch went wrong!', error);
      });
  }, [url_r]); 



    return (
      <>
      <a href={data} target="_blank" rel="noopener noreferrer"> <label>KAFKA CONTROL CENTER : {data}</label> </a>
        <br></br>
      </>
    );
  }

export default Form;