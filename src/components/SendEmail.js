import React, {useState} from 'react';


const SendEmail = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto', padding: '20px' }}>
          <img src="/images/greenCheck.png" style={{width:"80px", height:"80px"}}/>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
              이메일로 비밀번호 재설정 링크를 발송하였습니다.
              </label>
            </div>
            <button type="submit">로그인 페이지로 이동</button>
            
          </form>
        </div>
    );
}

export default SendEmail;