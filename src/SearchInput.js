import React from "react";
import { SearchIcon } from "./Icons";

const SearchInput = ({ onChange, value }) => {
  return (
    <div className="search-input">
      <SearchIcon />
      <input
        type="text"
        placeholder="Seach Twittee"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
