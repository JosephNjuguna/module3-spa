import React from "react";

function Search({ search, onSearchChange }) {
    return (
        <div className="search">
            <input
                type="text"
                value={search}
                name="search"
                placeholder="Search projects by description..."
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default Search;