import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    // Muestra el ultimo valor que se escribio
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }


    // Agrega con enter  y limpia el input
    const handleSubmit = (e) => {
      e.preventDefault();

      if(inputValue.trim().length > 2)

        setCategorias(cats => [inputValue,...cats]);
        setInputValue('');
    }

  return(

    
    <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    value={inputValue}
    onChange={handleInputChange}
    />
    </form>
    
    
  )
};

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired
}