import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import ProductDetail from '../../components/ProductDetail';
import Loading from '../../components/Loading';
import { getProduct } from '../../actions/productsActions';

const Product = ({ product, match, getProduct, history }) => {
    const idProduct = match.params.id;

    const loadProducts = (searchTerm) => {
        history.push(`/items?search=${searchTerm}`);
    }

    useEffect(() => {
        getProduct(idProduct);
    });

    return (
        <div>
            <SearchBar searchProducts={search => loadProducts(search)}/>
            
            { (product.loading) ? <Loading/> :
                <ProductDetail product={product.product}/>
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      product: state.product
    }
}

const mapDispatchToProps = { getProduct }

Product.propTypes = {
    product: PropTypes.shape({
        author: PropTypes.shape({
            name: PropTypes.string,
            lastname: PropTypes.string
        }),
        condition: PropTypes.string,
        description: PropTypes.string,
        free_shipping: PropTypes.bool,
        picture: PropTypes.string,
        sold_quantity: PropTypes.number,
        item: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            price: PropTypes.shape({
                currency: PropTypes.string,
                amount: PropTypes.number,
                decimals: PropTypes.number
            })
        })
    }),
    getProduct: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product)