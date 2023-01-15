import React, { useEffect, useState } from "react";
import HouseCard from "../../components/HouseCard.js";
import Dropdown from "../../components/InputField/Dropdown.js";
import InputField from "../../components/InputField/index.js";
import Navbar from "../../components/Navbar/Navbar";
import { BASE_URL } from "../../services";
import "./style.css";

const Properties = () => {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(`${BASE_URL}/listhouses`, {
      headers: {
        "Content-Type": "application/json",
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
    <>
      <Navbar />
      <div className="auth-container">
        <div className="properties-container-img-div">
          <div className="properties-overlay" />
          <div className="properties-filter-container">
            <div className="properties-filter-container-flex">
              <InputField
                showLabel
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for location"
                name="location"
                styles={{ backgroundColor: "white" }}
              />
              <Dropdown
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={"Price Range"}
                options={[
                  "0-5000",
                  "5000 - 20000",
                  "20000 - 50000",
                  "50000-100000",
                  "100000 - 200000",
                ]}
                showLabel
                styles={{
                  backgroundColor: "white",
                  border: "2px solid #6081ab",
                }}
              />
            </div>
            <div className="properties-filter-container-flex">
              <Dropdown
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={"Property Type"}
                options={["Flat", "Bungalow", "2 Story Building"]}
                showLabel
                styles={{
                  backgroundColor: "white",
                  border: "2px solid #6081ab",
                }}
              />
              <Dropdown
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={"Number of Bedrooms"}
                options={["1", "2", "3", "4"]}
                showLabel
                styles={{
                  backgroundColor: "white",
                  border: "2px solid #6081ab",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          {houses.length && (
            <h4 className="properties-list-title">
              1-{houses.length} available for rent in Lagos
            </h4>
          )}
          <div className="uploaded-houses-container">
            {houses
              .sort(
                (a, b) => new Date(b.uploadedDate) - new Date(a.uploadedDate)
              )
              .map((house) => (
                <HouseCard house={house} key={house._id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
