import AuthContext from '../Contexts/app-context';
import { useContext } from 'react';
import help from '../images/help.png';

const field3 = { "schema" : 
{
  "connect.name": "lithin.personal.ust_data",
  "fields": [
    {
      "name": "store_id",
      "type": "int"
    },
    {
      "name": "order_lines",
      "type": {
        "items": {
          "connect.name": "lithin.personal.order_line",
          "fields": [
            {
              "name": "product_id",
              "type": "int"
            },
            {
              "name": "category",
              "type": "string"
            },
            {
              "name": "quantity",
              "type": "int"
            },
            {
              "name": "unit_price",
              "type": "float"
            },
            {
              "name": "net_price",
              "type": "float"
            }
          ],
          "name": "order_line",
          "type": "record"
        },
        "type": "array"
      }
    }
  ],
  "name": "ust_data",
  "namespace": "lithin.personal",
  "type": "record"
}
}

const field4 = { "schema" : 
{
 "name": "lithin",
 "company": "UST",
 "age": "23",
 "account" : "BOOTS"
}}


const field5 ={
  "name": "HttpSinkConnectorConnector_0",
  "config": {
    "value.converter.schema.registry.url": "http://schema-registry:8081",
    "name": "HttpSinkConnectorConnector_0",
    "connector.class": "io.confluent.connect.http.HttpSinkConnector",
    "key.converter": "org.apache.kafka.connect.storage.StringConverter",
    "value.converter": "io.confluent.connect.avro.AvroConverter",
    "topics": "Regex_Schema",
    "http.api.url": "https://kafkasinkcollector-tava5544oa-uc.a.run.app",
    "request.method": "post",
    "reporter.result.topic.replication.factor": "1",
    "reporter.error.topic.replication.factor": "1",
    "reporter.bootstrap.servers": "broker:29092"
  }
}

const field9 = 
{
  "data": "pls give a  sample json message with context of a shopping with 20 fields with valid values and with mandatory key named account"
}

function ImageHint({ htmlFor}) {
    
   const ctx = useContext(AuthContext);
   const index = htmlFor.slice(-1)

   const help_map = new Map();
   help_map.set('1', { "Msg" : "Once VM created it needs a 3 mins to be Ready" });
   help_map.set('2', { "Msg" : "The plugins defines the various destinations the data can be sent"});
   help_map.set('3', field3);
   help_map.set('4', field4);
   help_map.set('5', field5);
   help_map.set('6', 'VM deletion can take upto 3 mins');
   help_map.set('7', 'Will delete all previous stored data');
   help_map.set('8', 'Deletes all the craeted connenctors. Use this to RESET');
   help_map.set('9', field9);

   const handleClick = async () => {
   const help = help_map.get(index);
   const formattedJSON = JSON.stringify(help, null, 2); 
   ctx.setText(formattedJSON);
  };

 
    return (
      <>
      <img src={help} htmlFor="field1" alt="field1"  onClick={handleClick} className='tiny-image'></img>
      </>
    );
  }

export default ImageHint;