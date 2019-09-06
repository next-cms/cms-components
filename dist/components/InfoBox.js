import React from 'react';

const InfoBox = ({
  icon,
  text
}) => {
  return React.createElement("span", null, icon, " ", React.createElement("span", null, text));
};

export default InfoBox;