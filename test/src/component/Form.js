import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
   return (
    <div className="form">
        
      <input placeholder ={'할일을 입력하세요'} value={value} onChange={onChange} onKeyPress={onKeyPress}>

      </input>
      <div className="create-button" onClick={onCreate}>
        +
      </div>
    </div>
  );
};

export default Form;