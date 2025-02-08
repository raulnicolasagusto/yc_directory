import React from 'react';
import Form from 'next/form';

const SearchForm = () => {
  return (
    <form action="/" scroll={false} className="search-form">
        <input 
            name="query"
            defaultValue=""
            className="search-input"
            placeholder="Search Startups..."
         />
    </form>
  )
}

export default SearchForm