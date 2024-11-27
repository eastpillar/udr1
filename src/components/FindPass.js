import React, {useState} from 'react';


const FindPass = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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
          fontFamily: "'Noto Sans KR', sans-serif"
        }}>
          <h2>비밀번호 찾기</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                사용자 이름:
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </label>
            </div>
            <div>
              <label>
                이메일:
                <input 
                //style="margin-left : 32px"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                  
                />
              </label>
            </div>
            <button type="submit">submit</button>
            
          </form>
        </div>
      );
}

export default FindPass;