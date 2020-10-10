import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // history.push("/marvel");
    const lastPath = localStorage.getItem("lastPath") || "/";
    const action = {
      type: types.login,
      payload: {
        name: "Ivan",
        lastname: "Lozanich",
      },
    };

    dispatch(action);
    history.replace(lastPath);
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
