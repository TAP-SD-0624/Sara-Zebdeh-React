import React from "react";
import SearchInputComponent from "../search/SearchInputComponent";
import Select from "../Select/Select";
import "./searchBar.css";

function SearchBar() {
  return (
    <div className="flex search-sort-filter-box">
      <SearchInputComponent />

      <div className="flex selectors-box">
        <Select
          htmlFor="sort"
          id="sort"
          name="sort"
          labelText="Sort by:"
          SelectOptions={["Default", "Topic Title", "Author Name"]}
        />

        <Select
          htmlFor="filter"
          id="filter"
          name="filter"
          labelText="Filter by:"
          SelectOptions={[
            "Default",
            "Category: Web Development Languages",
            "Category: Frontend Frameworks and Libraries",
            "Category: Backend Frameworks and Libraries",
            "Category: Databases and APIs",
            "Category: Web Development Concepts and Technologies",
          ]}
        />
      </div>
    </div>
  );
}

export default SearchBar;
