// Highlight.js

import React from 'react';
import './Highlight.css';
import { Link } from 'react-router-dom';
import { BsCurrencyRupee } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';

const Highlight = () => {
  return (
    <>
     <h2 className="functions-header">RTO Services</h2>
      <div className="container">
        <Link to="/carPlateChecker" className="left-container-link">
          <div className="left">
            <div className="left-inner">
              <div className="icon">
                <BsCurrencyRupee />
              </div>
              <div className="headline">Offer's you Best Fare</div>
              <div className="desc">Specify a ride fare and accept a suitable offer</div>
            </div>
          </div>
        </Link>
        {/* Wrap the center container in a Link */}
        <Link to="/policies" className="center-container-link">
          <div className="center">
            <div className="left-inner">
              <div className="icon">
                <AiOutlineCar />
              </div>
              <div className="headline">Choose a driver</div>
              <div className="desc">You see the driver's rating and number of rides before you accept the offer</div>
            </div>
          </div>
        </Link>
        {/* Add a Link to the right container */}
        <Link to="/stateSelection" className="right-container-link">
          <div className="right">
            <div className="left-inner">
              <div className="icon">
                <HiOutlineUserGroup />
              </div>
              <div className="headline">Explore State Selection</div>
              <div className="desc">Choose your state and explore RTO codes</div>
            </div>
          </div>
        </Link>
        {/* Add a Link to the extreme right container */}
        <Link to="/directionsMap" className="extreme-right-container-link">
          <div className="extreme-right">
            <div className="left-inner">
              {/* Add icon for the extreme right container */}
              <div className="icon"> {/* Add your icon component here */}</div>
              <div className="headline">Your Custom Container</div>
              <div className="desc">Your custom description</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Highlight;
