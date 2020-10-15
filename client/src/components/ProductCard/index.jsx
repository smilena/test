import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import './styles.scss';
import IconShipping from '../../assets/ic_shipping.png';

const ProductCard = ({product}) => {
    const history = useHistory();
    
    const goProductDetail = (id) =>{ 
    let path = `/items/${id}`; 
        history.push(path);
    }

    return (
        <div className="containerItem" onClick={() => goProductDetail(product.id)}>
            <div>
                <img src={product.picture} alt="Producto"/>
            </div>
            <div className="information">
                <div>
                    <span className="price">
                        {product.price.currency} {product.price.amount}
                    </span>
                    {(product.free_shipping) ? 
                        <img src={IconShipping} alt="Free shipping"/> : null
                    }
                </div>
                <div>
                    <span>{product.title}</span>
                </div>
            </div>
            <div className="place">
                {(product.place) ? 
                    <span>{product.place}</span> : null
                }
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        condition: PropTypes.string.isRequired,
        free_shipping: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            decimals: PropTypes.number.isRequired
        })
    }).isRequired,
};

export default ProductCard;