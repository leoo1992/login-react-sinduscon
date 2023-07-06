import React from "react";
import{Navigate} from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="text-end p-3 bg-dark">
        <button
          className="btn btn-primary fw-bold"
          onClick={<Navigate to="/login" />}
        >
          Login
        </button>
      </div>
      <h1>Olá</h1>
    </>
  );
};

export default HomePage;
