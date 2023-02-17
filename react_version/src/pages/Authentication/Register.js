import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdSortByAlpha } from "react-icons/md";
import { FaCity, FaUser } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import authImg from "../../assets/images/auth-img.svg";
import InputField from "../../components/InputField";
import Navbar from "../../components/Navbar/Navbar";
import { BASE_URL } from "../../services";
import Dropdown from "../../components/InputField/Dropdown";
import Button from "../../components/Button/index.js";
import "./style.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (!firstname || !lastname || !city || !email || !password) {
      setError("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords must be same");
      return;
    }
    console.log(
      {
        firstname,
        lastname,
        email,
        password,
        userType,
      },
      "fetching"
    );
    fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        city,
        email,
        password,
        userType,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="auth-container-img-div">
          <div className="auth-overlay" />
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
          <h3>Register for an account</h3>
          <InputField
            icon={<MdSortByAlpha />}
            value={firstname}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="First Name"
            name="first name"
          />

          <InputField
            icon={<MdSortByAlpha />}
            placeholder="Last Name"
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
            name="last name"
          />

          <InputField
            icon={<FaCity />}
            placeholder="City"
            value={city}
            name="city"
            onChange={(event) => setCity(event.target.value)}
          />

          <InputField
            icon={<AiTwotoneMail />}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            name="email"
          />

          <InputField
            icon={<RiLockPasswordFill />}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            name="password"
          />

          <InputField
            icon={<RiLockPasswordFill />}
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm Password"
            name="password"
          />

          <Dropdown
            icon={<FaUser />}
            value={userType}
            onChange={(event) => setUserType(event.target.value)}
            placeholder={"User Type"}
            options={["Landlord", "Tenant"]}
          />

          <p className="auth-error">{error}</p>
          <div className="button-container">
            <Button solid type="submit" text="Register" />
            <p>
              Already have an account? Login as{" "}
              <Link to="/tenant-login">Tenant</Link> or{" "}
              <Link to="/landlord-login">Landlord</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
