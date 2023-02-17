import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import InputField from "../../components/InputField";
import Navbar from "../../components/Navbar/Navbar";
import { BASE_URL } from "../../services";
import Button from "../../components/Button/index.js";
import "./style.css";

const LandlordLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    fetch(`${BASE_URL}/landlord-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem(
            "landlordDetails",
            JSON.stringify({
              token: data.authorization.token,
              details: data.data.user,
            })
          );
          navigate("/landlord-dashboard");
        } else setError(data.error);
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
          <h3>Welcome Back</h3>

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

          <p className="auth-error">{error}</p>
          <div className="button-container">
            <Button solid type="submit" text="Log in" />
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
        <p className="auth-or">OR</p>
        <div className="multi-auth">
          <div>
            <FcGoogle />
            <p>Continue with Google</p>
          </div>
          <div>
            <FaFacebook />
            <p>Continue with Facebook</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandlordLogin;