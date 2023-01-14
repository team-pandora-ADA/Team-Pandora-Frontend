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

  // let house = {
  //   _id: "63c15947d1f0a39133283544",
  //   title: "A fully furnished house with 24hrs electricity",
  //   address: "Ojota market",
  //   state: "Lagos",
  //   model: "Bungalow",
  //   plan: "Weekly",
  //   description: "A cool house in a serene environment",
  //   uploadedDate: "2023-01-09T06:02:22.500Z",
  //   id: "63c13bbff5ee4a7af535506a",
  //   imageUrl:
  //     "https://www.condoblackbook.com/media/3873/the-ritz-carlton-residences-miami-beach.png?anchor=center&mode=crop&width=800&height=535&rnd=132652957070000000",
  //   __v: 0,
  // };
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
