import React, { useState } from 'react';
import Product from './Product';

function ProductDisplay() {
    const [sortOption, setSortOption] = useState('price-asc');
    const [filterOption, setFilterOption] = useState('all');

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    };

    return (
        <section className="product-display">
            <div className="banner">
                <h2>Welcome to Our Classic Car Parts Store</h2>
                <p>Find the best parts for your classic car!</p>
            </div>

            <div className="filters">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortOption} onChange={handleSortChange}>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Rating</option>
                </select>

                <label htmlFor="filter">Filter by:</label>
                <select id="filter" value={filterOption} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="engine">Engine Parts</option>
                    <option value="suspension">Suspension</option>
                </select>
            </div>

            <div className="product-grid">
                <Product name="Product 1" price="$99.99" />
                <Product name="Product 2" price="$89.99" />
            </div>
        </section>
    );
}

export default ProductDisplay;
