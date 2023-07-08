import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  return (
    <>
      <div className="bg-fundo flex-container">
        <h3 className="p-0 m-0 text-start text-danger d-inline">Sinduscon</h3>

        <div className="btn-group">
          <div className="justify-content-end">
            <Link to="/cadastro" className="btn btn-danger fw-bold">
              Registrar
            </Link>
          </div>

          <div className="justify-content-end ms-2">
            <Link to="/login" className="btn btn-primary fw-bold">
              Login
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};

export default HomePage;
