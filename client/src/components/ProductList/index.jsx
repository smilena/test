import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import ProductCard from '../ProductCard';

const ProductList = ({products}) => {
    const loadItems = 4;
    let [limit, updateLimit] = useState(loadItems);

    let productCards = products.slice(0, limit).map((product, i) => {
        return <div className="card" key={i}>
                    <ProductCard product={product} />
                </div>;
    });

    let loadMore = () => {
        updateLimit(limit+loadItems);
    }

    return (
        <div className="containerList">
            <div className="containerCards">
                {productCards}
            </div>
            
            {(limit <= products.length) ? 
                <h2 className="loadMore" onClick={loadMore}>Cargar más items</h2> : null
            }
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array
};

export default ProductList;