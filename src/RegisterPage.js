// src/RegisterPage.js

import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import "./LoginPage.css";
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {

                localStorage.setItem('isLoggedIn', 'true');
                navigate('/home');
            })
            .catch((error) => {


                alert('Účet už byl vytvořen, zadejte jiný email.');

            });
    };

    return (
        <div className="login-container">
            <h1>Registrace</h1>
            <input
                className="login-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email"
            />
            <input
                className="login-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Heslo"
            />
            <button className="login-button" onClick={handleRegister}>Registrovat</button>
            <Link id="toRegister"   to="/login" className="login-link">Už máte účet? Příhlášení</Link>
        </div>
    );
}

export default RegisterPage;
