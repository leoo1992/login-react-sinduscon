import React, { useState } from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import api from './axiosConfig';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email && password) {
            try {
                const response = await api.post('/login', {
                    email: email,
                    password: password
                });
                console.log(response.data.message);
            } catch (error) {
                console.error(error.response.data.error);
            }
        } else {
            console.log("Preencha todos os campos!");
        }
        setEmail("");
        setPassword("");
    }
    return (
        <div id="login" className="d-flex p-4 justify-content-center align-items-center fw-bold">
            <h3 className="text-white">Login Sinduscon</h3>
            <form onSubmit={handleSubmit} className="form-login border-success w-100 p-4 rounded-3">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label d-block">E-mail:</label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control border-primary w-100"
                        aria-describedby="emailHelp"
                        required
                    />
                </div>
                <div className="mb-3">
                    <div className="col-auto">
                        <label htmlFor="password" className="col-form-label d-block">Senha:</label>
                    </div>
                    <div className="col-auto">
                        <input
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control border-primary w-100"
                            aria-describedby="passwordHelpInline"
                            required
                        />
                    </div>
                </div>
                <div className="text-center pt-3">
                    <button type="submit" className="action-login btn btn-outline-success fw-bold">Entrar</button>
                </div> 
                <div className="text-center">
                    <span>ou</span>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-primary fw-bold">Cadastre-se aqui</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
