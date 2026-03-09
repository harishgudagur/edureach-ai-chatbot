import { useState } from "react";
import {api } from './services/api';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => { 
    const res = await api.post('auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    navigate('/dashboard');
  };

    return (
        <>
            <h2>Login Page </h2>
            <input placeholder = "Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder = "Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {/* <button onClick={handleLogin}>Login</button> */}
        </>
    );
};

export default Login;
