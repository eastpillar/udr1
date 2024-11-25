import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch를 Routes로 변경
import Login from './components/Login';
import LoginSuccess from './pages/LoginSuccess';

const App = () => {
  return (
    <Router>
      <Routes> {/* 여기에서 Switch를 Routes로 변경 */}
        <Route path="/" element={<Login />} /> {/* component 대신 element 사용 */}
        <Route path="/success" element={<LoginSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;