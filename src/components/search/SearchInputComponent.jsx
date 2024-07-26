import React from "react";
import { GoSearch } from "react-icons/go";
import "./search.scss";

function SearchInputComponent() {
  return (
    <div className="flex gap search-box">
      <GoSearch />
      <input
        className="search"
        name="search"
        type="text"
        placeholder="Search the website..."
      />
    </div>
  );
}

export default SearchInputComponent;
