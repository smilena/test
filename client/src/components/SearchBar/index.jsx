import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Logo from '../../assets/logo_meli.png';
import IconSearch from '../../assets/ic_search.png';

const SearchBar = ({searchProducts}) => {
    const [searchTerm, updateSearchTerm] = useState("");
    const handleKeypress = e => {
        if (e.key === "Enter") {
            searchProducts(searchTerm);
        }
    }
    return (
        <div className="container">
            <img src={Logo} className="logo" alt="Logo Mercadolibre"/>
            <div>
                    <input 
                        type="text"
                        placeholder="Nunca dejes de buscar"
                        onChange={e => updateSearchTerm(e.target.value)}
                        onKeyPress ={handleKeypress}
                        value={searchTerm}
                    />
                    <button 
                        onClick={() => searchProducts(searchTerm)}
                    >
                        <img src={IconSearch} alt="Buscar"/>
                    </button>
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    searchProducts: PropTypes.func
};

export default SearchBar;