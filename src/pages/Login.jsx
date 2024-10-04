import style from './Login.module.scss';
import React, { useState } from 'react';
 
export const Login = ({ open, handleClose }) => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }

    window.location.href = 'AdminPage.jsx';
    console.log('Submitted Email:', email);
    console.log('Submitted Password:', password);

  };

  
  return (
    <div open={open} className={style.login} >
       <div onClose={handleClose} className={style.closeForm}>X</div>
      <h1>Login Admin</h1>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

     
    </div>
  );
};