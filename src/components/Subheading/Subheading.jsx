import React from 'react';
import { images } from '../../constants';
import './Subheading.css';

const Subheading = ({title }) => {
    return (
        <div className="subheading">
            <p className="p__cormorant">{title}</p>
            <img className="spoon__img" src={images.spoon} alt="spoon"/>
        </div>
    )
}

export default Subheading