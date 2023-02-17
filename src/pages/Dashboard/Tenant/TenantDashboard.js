import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { BASE_URL } from "../../../services";

const TenantDashboard = () => {
  const [houses, setHouses] = useState([]);
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
        <div className="auth-container-img-div">
          <div className="auth-overlay" />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default TenantDashboard;
