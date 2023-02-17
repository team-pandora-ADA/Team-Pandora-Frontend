import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import authImg from "../../assets/images/auth-img.svg";
import InputField from "../../components/InputField";
import Navbar from "../../components/Navbar/Navbar";
import { BASE_URL } from "../../services";
import Button from "../../components/Button/index.js";
import "./style.css";

const TenantLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //   useEffect(() => {
  //     console.log(location.state);

  //   }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    console.log(
      {
        email,
        password,
      },
      "fetching"
    );
    fetch(`${BASE_URL}/tenant-login`, {
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
          <h3>Welcome Back tenant</h3>

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
        </form>
      </div>
    </>
  );
};

export default TenantLogin;
