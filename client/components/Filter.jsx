import React from "react";
import "../stylesheets/styles.scss";

const Filter = (props) => {
  const handleChange = (e) => {
    props.handleCheck(e.target.value);
  };
  return (
    <div>
      <input
        className="filter"
        type="checkbox"
        onChange={handleChange}
        id="string-filter"
        name="string-filter"
        value="NAME_FILTER"
      />
      <label htmlFor="string-filter" aria-label="Add new task...">
        Filter By Task Name
      </label>
    </div>
  );
};

export default Filter;
