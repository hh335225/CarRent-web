import React from "react";
import './searchBar.scss';
import { ReactComponent as Filter } from "../../../assets/icons/filter.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

interface SearchBarProps {
    placeholder: string;
    onTextChange?: void;
    onSearch?: void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onTextChange, onSearch }) => {
    return (
        <div className="searchBar">
            <SearchIcon />
            <input placeholder={placeholder} />
            <Filter />
        </div>
    )
}

export default SearchBar;