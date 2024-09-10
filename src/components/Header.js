import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Car Parts Store</h1>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search for parts..." />
                <button>Search</button>
            </div>
        </header>
    );
}

export default Header;
