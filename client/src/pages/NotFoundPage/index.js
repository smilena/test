import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const NotFoundPage = (props) => {
    return (
        <div className="notFoundContainer">
            <h1>404 - Not Found!</h1>
            <Link to="/">
            Ir al inicio
            </Link>
        </div>
    )
}

export default NotFoundPage;