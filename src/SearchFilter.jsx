// SearchFilter.js
import React, { useState, useEffect } from 'react';
import './Books.css';

const SearchFilter = ({ books, setFilteredBooks }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books, setFilteredBooks]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search books...@author..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchFilter;
