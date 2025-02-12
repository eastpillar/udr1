import React from 'react';
import { useNavigate } from 'react-router-dom';

const SendEmail = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/'); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }
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
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Noto Sans KR', sans-serif"
    }}>
      <img src="/images/greenCheck.png" style={{ maxwidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ display: 'block', textAlign: 'center'}}>
            이메일로 비밀번호 재설정 링크를 발송하였습니다.
          </label>
        </div>
        <button type="submit"
        onClick={handleLoginClick}
          style={{
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
          }}>로그인 페이지</button>

      </form>
    </div>
  );
}

export default SendEmail;