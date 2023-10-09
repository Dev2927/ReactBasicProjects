import React from "react";

function Form({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
