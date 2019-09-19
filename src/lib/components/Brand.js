import React from 'react';
import * as PropTypes from 'prop-types';

const Brand = ({ imageUrl, brandName }) => {

  const img = imageUrl && <img src={imageUrl} alt="brand-logo"></img>;

  return (
    <span>{img} {brandName} </span>
  );
}

Brand.propTypes = {
    imageUrl: PropTypes.string,
    brandName: PropTypes.string
}

export default Brand;
