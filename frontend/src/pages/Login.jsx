import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Logging in as ${email}`);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="container w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
