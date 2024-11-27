import React from 'react';

const LoginSuccess = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>로그인 성공!</h1>
      <p>환영합니다.</p>
      {/* 연결 페이지 링크 추가 */}
      <a href="/">홈으로 가기</a>
    </div>
  );
};

export default LoginSuccess;