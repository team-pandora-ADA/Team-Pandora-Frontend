import React from "react";
import { IoIosBed } from "react-icons/io";
import { GiShower, GiHomeGarage } from "react-icons/gi";
import "./style.css";

const HouseCard = (props) => {
  const {
    imageUrl,
    address,
    price,
    plan,
    model,
    parkingSpaces = 0,
    bedrooms = 0,
    bathrooms = 0,
  } = props.house;
  return (
    <div className="house-card">
      <div className="house-card-img-container">
        <img src={imageUrl} />
      </div>
      <div className="house-card-details">
        <p>{address}</p>
        <div>
          <h3 className="house-price">{price}</h3>
          <p>{plan}</p>
        </div>
        <p>{model}</p>
        <div className="house-card-listings">
          <div>
            <IoIosBed />
            <p>{bedrooms}</p>
          </div>

          <div>
            <GiShower />
            <p>{bathrooms}</p>
          </div>
          <div>
            <GiHomeGarage />
            <p>{parkingSpaces}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
