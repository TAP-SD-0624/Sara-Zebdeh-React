import React from "react";
import "./search.css";

function SearchInputComponent() {
  return (
    <div className="flex gap search-box">
      <ion-icon name="search-outline"></ion-icon>
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
