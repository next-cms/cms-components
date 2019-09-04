import React from 'react';

const InfoBox = ({ icon, text }) => {
    return (
        <span>{icon} <span>{text}</span></span>
    );
}

export default InfoBox;