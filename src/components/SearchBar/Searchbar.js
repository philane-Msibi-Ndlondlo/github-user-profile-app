import React, { useState } from 'react'

import './Searchbar.css';

const Searchbar = ({ searchUser }) => {

    const [ search, setSearch ] = useState('');

    const handleSearchinput = (e) => {
        const { value } = e.target;

        if ( value ) {
            setSearch(value);
        }

    }

    return (
        <div className='searchbar'>
            <h1>Github Profile</h1>
            <div className='search-container'>
                <input type="text" className='searchInput' placeholder="Search Github User" value={search} onChange={handleSearchinput}  />
                <i className="fa fa-search" aria-hidden="true" onClick={() => searchUser(search)}></i>
            </div>
        </div>
    )
}

export default Searchbar;