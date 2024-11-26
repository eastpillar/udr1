import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LoginSuccess from './pages/LoginSuccess';

import FindPass from "./components/FindPass";

import NotFound from './pages/NotFound'; // NotFound 추가


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<LoginSuccess />} />

        <Route path="/findPass" element={<FindPass />}/>

        <Route path="*" element={<NotFound />} /> {/* NotFound 페이지 추가 */}

      </Routes>
    </Router>
  );
};

export default App;