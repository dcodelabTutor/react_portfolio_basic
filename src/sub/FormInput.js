import { useState } from "react";

function FormInput(props){
  const [focused, setFocused] = useState(false);
  const {label, errorMessage, onChange, id, ...inputProps} = props;

  function handleFocus(e){
    setFocused(true);
  }

  return (
    <div className="formInput">
      <label>{label}</label> 
      <input 
        {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus}         
        focused={focused.toString()}     
        required 
      />    
      <span>{errorMessage}</span>  
    </div>
  )
}

export default FormInput; 