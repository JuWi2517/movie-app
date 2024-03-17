
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './users';
import "./LoginPage.css"

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

   
    const handleLogin = () => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/home');
        } else {
            setLoginError(true);
        }
    };


    return (
        <div className="login-container">
            <input
                className="login-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="login-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="login-button" onClick={handleLogin}>Login</button>
            {loginError && <p className="login-error">Incorrect username or password</p>}
        </div>
    );
}

export default LoginPage;
