import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={searchChange}
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
      />
    </div>
  );
};

export default SearchBox;
