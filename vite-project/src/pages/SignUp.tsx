import { useState } from "react"; 
import { api } from './services/api';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignup = async () => {
    
    await api.post('/users', { name, email, password });
      // Handle successful signup (e.g., redirect to login page)
    alert('Signup successful! Please log in.');
  };

  return (
    <>
      <h1>Sign Up</h1>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {/* <button onClick={handleSignup}>Sign Up</button> */}
    </>
  );
};

export default Signup;
