import React from 'react';

const InfoBox = ({ icon, text }) => {
    return (
        <p>{icon} <span>{text}</span></p>
    );
}

export default InfoBox;