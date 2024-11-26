import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("회원가입 정보:", { name, email, password });
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #cbd5e0',
    fontSize: '16px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#4a5568',
    fontSize: '14px'
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
      <h2 style={{ color: '#1e3a8a', marginBottom: '20px', textAlign: 'center' }}>회원가입</h2>
      {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>아이디</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>이메일</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>비밀번호</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>비밀번호 확인</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            style={inputStyle}
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
          transition: 'background-color 0.3s',
          marginBottom: '15px'
        }}>가입하기</button>
      </form>
      <Link to="/Login" style={{
        textAlign: 'center',
        textDecoration: 'none',
        color: '#3b82f6',
        fontWeight: 'bold'
      }}>
        로그인 페이지로 돌아가기
      </Link>
    </div>
  );
};

export default Signup;