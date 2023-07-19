import React from "react";
import "./Login.css";
import Api from "../Api";

const Login = ({ onReceive }) => {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Error!");
    }
  };

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}>Loguear con Facebook</button>
    </div>
  );
};

export default Login;
