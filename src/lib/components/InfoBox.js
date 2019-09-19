import React from 'react';
import * as PropTypes from 'prop-types';

const InfoBox = ({ icon, text }) => {
    return (
        <span>{icon} <span>{text}</span></span>
    );
}

InfoBox.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string
}

export default InfoBox;
