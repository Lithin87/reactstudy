import React from 'react';
import LabelOption from './LabelOption';
import ImageHint from './ImageHint';

const MenuOption = () => {
  return (
    <div>
     
        <div className="form-group">
          <LabelOption htmlFor="field1">Create a VM</LabelOption> <ImageHint htmlFor="field1"></ImageHint>
        </div>
      
        <div className="form-group">
          <LabelOption htmlFor="field2">Get a list of all connector plugins</LabelOption>  <ImageHint htmlFor="field2"></ImageHint>
        </div>

        <div className="form-group">
          <LabelOption htmlFor="field3">Create a template connector based on Avro Schema</LabelOption> <ImageHint htmlFor="field3"></ImageHint>
        </div>

        <div className="form-group">
          <LabelOption htmlFor="field4">Create a template connector based on JSON message</LabelOption> <ImageHint htmlFor="field4"></ImageHint>
        </div>

        <div className="form-group">
          <LabelOption htmlFor="field5">Create a connector based on Configuration</LabelOption> <ImageHint htmlFor="field5"></ImageHint>
        </div>

        <div className="form-group">
          <LabelOption htmlFor="field6">Delete a VM</LabelOption> <ImageHint htmlFor="field6"></ImageHint>
        </div>

        <div className="form-group">
          <LabelOption htmlFor="field7">Delete all the topics</LabelOption> <ImageHint htmlFor="field7"></ImageHint>
        </div>

        <div className="form-group">
          <LabelOption htmlFor="field8">Delete all the connector</LabelOption> <ImageHint htmlFor="field8"></ImageHint>
        </div>

        <div className="form-group">
          <LabelOption htmlFor="field9">Ask ChatGPT AI</LabelOption> <ImageHint htmlFor="field9"></ImageHint>
        </div>
     
    </div>
  );
};

export default MenuOption;
