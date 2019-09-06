import React from 'react';

const Brand = ({ imageUrl, brandName }) => {

  const img = imageUrl && <img src={imageUrl} alt="brand-logo"></img>;

  return (
    <span>{img} {brandName} </span>
  );
}

export default Brand;