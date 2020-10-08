import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    // history.push("/marvel");
    history.replace("/marvel");
  };

  return (
    <div className="container mt-5">
      <h1>Login Heroes App</h1>
      <hr />

      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
