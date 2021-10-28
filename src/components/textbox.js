import React from 'react';
import './textbox.css'


const TextBox =(props)=>{
  return(
    <div className= 'text'>
      <input type='text' placeholder={...props.name} />
    </div>
  )
}

export default TextBox;