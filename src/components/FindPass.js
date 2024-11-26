import React, {useState} from 'react';
//import '/Users/andongju/Desktop/개발 공부/project/udr1/src/styles/app.css';

const FindPass = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto', padding: '20px' }}>
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