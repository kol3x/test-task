import React, { useState, ChangeEvent, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  return (
    <div className="search-input-wrapper">
      <input
        className="searchInput"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
      <CiSearch className="icon search-icon" />
    </div>
  );
};

export default SearchBar;
