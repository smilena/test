import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Breadcrumbs = ({categories}) => {
    let breadcrumb = (categories !== undefined) ? categories.join(' > ') : null;
    return (
        <div className="containerBreadcrumb">
            <span className="content">{breadcrumb}</span>
        </div>
    )
}

Breadcrumbs.propTypes = {
    categories: PropTypes.array
};

export default Breadcrumbs;