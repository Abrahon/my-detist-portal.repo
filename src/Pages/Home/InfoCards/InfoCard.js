import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard = ({card}) => {
    const {name, description, icon,bgClass }=card;
    return (
        <div className={`card px-6 card-side shadow-xl ${bgClass}`}>
        <figure>
          <img src={icon} alt="Movie"/>
          </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
         <Link to ='/dashboard'> <button>Click</button></Link>
          
        </div>
      </div>
    );
};

export default InfoCard;