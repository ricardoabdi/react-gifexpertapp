import React, { useState } from "react"; //rafc
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (event) => {
    setinputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      //valida componente no este vacio
      setCategories((cats) => [inputValue, ...cats]);
      setinputValue(""); //limpia componente texto
    }

    //console.log("Submit hecho");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.prototype = {
  setCategories: PropTypes.func.isRequired,
};
