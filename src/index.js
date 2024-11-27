import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // React Router 추가
import './index.css';
import Login from './components/Login'; // 로그인 페이지
import Signup from './components/Signup'; // 회원가입 페이지
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* 기본 로그인 페이지 */}
        <Route path="/Login" element={<Login />} /> {/* 로그인 페이지로 돌아가기 */}
        <Route path="/Signup" element={<Signup />} /> {/* 회원가입 페이지 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
