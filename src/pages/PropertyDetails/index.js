import React, { useEffect, useState } from "react";
import { IoIosBed } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { GiShower, GiHomeGarage } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
import Navbar from "../../components/Navbar/Navbar";
import "./style.css";
import Button from "../../components/Button";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [house, setHouse] = useState(
    localStorage.getItem("currentHouse")
      ? JSON.parse(localStorage.getItem("currentHouse"))
      : ""
  );
  const [tenant, setTenant] = useState(
    localStorage.getItem("tenantDetails")
      ? JSON.parse(localStorage.getItem("tenantDetails"))
      : ""
  );

  console.log(tenant, "teneat");

  useEffect(() => {
    if (!house) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="property-details-container">
        <div className="property-details-container-side ">
          <h2 className="house-price" style={{ margin: "10px 0" }}>
            Property Details
          </h2>
          <div className="property-details-container-side-images">
            <img src={house.imageUrl} />
            <div className="property-location">
              <p>Find Location</p>
              <img src="https://th.bing.com/th/id/OIP.flerb1lwa43D0RqCJj7qqQHaEC?w=275&h=180&c=7&r=0&o=5&pid=1.7" />
            </div>
          </div>
        </div>
        {showPayment ? (
          <div className="property-details-container-side property-agreement">
            <BsArrowLeft
              onClick={() => setShowPayment(false)}
              className="property-details-arrow"
            />
            <p className="house-price" style={{ margin: "20px 0" }}>
              Confirm Details
            </p>

            <div className="agreement-details-details">
              <p>Apartment Type:</p>
              <p>{house.model}</p>
            </div>
            <div className="agreement-details-details">
              <p>Apartment Address:</p>
              <p>{house.address}</p>
            </div>
            <div className="agreement-details-details">
              <p>Apartment Plan:</p>
              <p>{house.plan}</p>
            </div>
            <div className="agreement-details-details">
              <p>Tenant Name:</p>
              <p>{tenant?.details?.name}</p>
            </div>
            <div className="agreement-details-details">
              <p>Tenant Email:</p>
              <p>{tenant?.details?.email}</p>
            </div>
            <div className="agreement-details-details">
              <p>Payment Mode:</p>
              <p>Bank Transfer</p>
            </div>
            <div className="agreement-details-check-container">
              <div className="agreement-details-check">
                <input type="checkbox" />
                <div>
                  <p>Terms and Conditions</p>I hereby accept the terms and
                  conditions of Rentease
                </div>
              </div>
              <div className="agreement-details-check">
                <input type="checkbox" />
                <div>
                  <p>Privacy Policy</p>I hereby accept that I have read and
                  understood the privacy policies
                </div>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Button
                text={!tenant ? "You're not logged in" : "Pay"}
                onClick={() =>
                  !tenant ? navigate("/tenant-login") : showPayment(true)
                }
                solid
              />
            </div>
          </div>
        ) : (
          <div className="property-details-container-side">
            <div className="property-details">
              <p>{house.address}</p>
              <h3 className="house-price">
                N
                {Number(house.price) ? Number(house.price).toLocaleString() : 0}
              </h3>
              <p className="property-description">
                <p>Description</p>
                <br />
                {house.description}
              </p>
              <h3 className="house-price">Utilities</h3>
              <div className="house-card-listings">
                <div>
                  <IoIosBed />
                  <p>{house.bedrooms}</p>
                </div>

                <div>
                  <GiShower />
                  <p>{house.bathrooms}</p>
                </div>
                <div>
                  <GiHomeGarage />
                  <p>{house.parkingSpaces}</p>
                </div>
              </div>
            </div>
            <div className="property-review">
              <h3 className="house-price" style={{ margin: "20px 0" }}>
                Reviews
              </h3>
              <div className="property-review-card">
                <img src={user1} />
                <p>This house is amazing</p>
              </div>
              <div className="property-review-card">
                <img src={user2} />
                <p>The Landlord is very generous and understanding.</p>
              </div>
              <div className="property-review-card">
                <img src={user3} />
                <p>The environment is peaceful with 24 hours electricity</p>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Button
                text="I'm Interested"
                onClick={() => setShowPayment(true)}
                solid
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyDetails;
