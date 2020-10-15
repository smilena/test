import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ProductDetail = ({product = {item: {}}}) => {
    let stateProduct = product.condition === 'New' ? 'Nuevo' : 'Usado'; 
    return (
        <div className="containerProductDetail">
            <div className="product">
                {(product.picture) ? <img src={product.picture} alt="Foto producto"/> : null}
                <div className="productData">
                    <span className="small">{stateProduct} - {product.sold_quantity} vendidos</span>
                    { (product.item) ?
                        <span className="name">{product.item.title}</span> : null
                    }
                    {(product.item) ? 
                        <span className="price">{product.item.price.currency} {product.item.price.amount}</span>: null
                    }
                    <input type="button" value="Comprar"/>
                </div>
                <div className="productDescription">
                    <h2>Descripción del producto</h2>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.shape({
        author: PropTypes.shape({
            name: PropTypes.string,
            lastname: PropTypes.string
        }),
        condition: PropTypes.string,
        description: PropTypes.string,
        free_shipping: PropTypes.bool,
        item: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            picture: PropTypes.string,
            sold_quantity: PropTypes.number,
            price: PropTypes.shape({
                currency: PropTypes.string,
                amount: PropTypes.number,
                decimals: PropTypes.number
            })
        })
    })
};

export default ProductDetail;