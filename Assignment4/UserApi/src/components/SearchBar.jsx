import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search user by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: 8, width: "300px", marginBottom: 20 }}
    />
  );
};

export default SearchBar;
