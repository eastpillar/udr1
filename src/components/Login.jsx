import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function App(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      fontFamily: "'Noto Sans KR', sans-serif"
    }}>
      <h2 style={{ color: '#1e3a8a', marginBottom: '20px', textAlign: 'center' }}>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#4a5568' }}>
            이메일
          </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #cbd5e0',
              fontSize: '16px'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#4a5568' }}>
            비밀번호
          </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #cbd5e0',
              fontSize: '16px'
            }}
          />
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>로그인</button>
      </form>
      <Link to="/signup" style={{
        marginTop: '20px',
        textAlign: 'center',
        textDecoration: 'none',
        color: '#3b82f6',
        fontWeight: 'bold'
      }}>
        회원가입
      </Link>
    </div>
  );
}

export default App;