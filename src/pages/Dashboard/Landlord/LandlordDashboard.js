import React, { useEffect, useState } from "react";
import UploadHouseForm from "./UploadHouseForm";
import "./style.css";
import HouseCard from "../../../components/HouseCard.js";
import { BASE_URL } from "../../../services";
import { Navigate, useNavigate } from "react-router";

const LandlordDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("uploadedHouses");
  const [landlord, setLandlord] = useState(
    localStorage.getItem("landlordDetails")
      ? JSON.parse(localStorage.getItem("landlordDetails"))
      : ""
  );

  useEffect(() => {
    if (!landlord) {
      navigate("/landlord-login");
    }
  }, []);

  return (
    <div className="landlord-dashboard-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "uploadedHouses" ? "active" : ""}`}
          onClick={() => setActiveTab("uploadedHouses")}
        >
          My Houses
        </div>
        <div
          className={`tab ${activeTab === "uploadHouse" ? "active" : ""}`}
          onClick={() => setActiveTab("uploadHouse")}
        >
          Upload House
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "uploadedHouses" ? (
          <UploadedHouses landlord={landlord} />
        ) : (
          <UploadHouseForm landlord={landlord} />
        )}
      </div>
    </div>
  );
};

const UploadedHouses = ({ landlord }) => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/getLandlordHouses/${landlord?.details?.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${landlord?.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.data) {
          setHouses(data.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="uploaded-houses">
      <h2 className="uploaded-houses-title">Uploaded Houses</h2>
      <div className="uploaded-houses-container">
        {houses
          .sort((a, b) => new Date(b.uploadedDate) - new Date(a.uploadedDate))
          .map((house) => (
            <HouseCard house={house} key={house._id} />
          ))}
      </div>
    </div>
  );
};

export default LandlordDashboard;
