import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList';
import Breadcrumbs from '../../components/Breadcrumb';
import Loading from '../../components/Loading';
import { getProducts } from '../../actions/productsActions';

const Search = ({products, getProducts, history, location}) => {
    const [searchTerm, updateSearchTerm] = useState('');
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        getProducts(params.get('search'));
    });

    useEffect(() => {
        getProducts(searchTerm);
    }, [searchTerm, getProducts]);

    const loadProducts = (searchTerm) => {
        history.push(`/items/?search=${searchTerm}`);
        updateSearchTerm(searchTerm);
    }
    return (
        <div>
            <SearchBar searchProducts={search => loadProducts(search)}/>
            <div>
                { (products.loading) ? <Loading/> :
                    <div>
                        <Breadcrumbs categories={products.products.categories}/> 
                        <ProductList products={products.products.items}/>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.products
    }
}

const mapDispatchToProps = { getProducts }

Search.propTypes = {
    products: PropTypes.shape({
        products: PropTypes.shape({
            author: PropTypes.shape({
                name: PropTypes.string,
                lastname: PropTypes.string,
            }),
            categories: PropTypes.array,
            items: PropTypes.array
        })
    }),
    getProducts: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)