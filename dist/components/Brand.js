import React from 'react';

const Brand = ({
  imageUrl,
  brandName
}) => {
  const img = imageUrl && React.createElement("img", {
    src: imageUrl,
    alt: "brand-logo"
  });
  return React.createElement("span", null, img, " ", brandName, " ");
};

export default Brand;