import React from 'react';
import grayBlankie from '../assets/placeholderImages/grayBlankie.png';

const Card = props => {
  return (
    <div className="card">
    <div className="cardImageContainer"><link rel="#" href=""/>
      <img className="cardImage" src={grayBlankie} alt="gray blankie, so soft, so fuzzy" />
     </div>
  <div className="cardBody">
    <div className="cardTitle"><h3>Product Title</h3></div>
    <div className="cardDescription">$49.95</div>
  </div>
</div>
  );
};

export default Card;