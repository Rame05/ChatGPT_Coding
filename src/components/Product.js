import React from 'react';

function Product({ name, price }) {
    return (
        <div className="product">
            <img src="https://via.placeholder.com/200" alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;
