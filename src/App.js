import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LoginSuccess from './pages/LoginSuccess';
import FindPass from "./components/FindPass";
import NotFound from './pages/NotFound'; // NotFound 추가
import SendEmail from "./components/SendEmail";
import SignupSuccess from './pages/SignupSuccess';
import SignupFail from './pages/SignupFail';


const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/success" element={<LoginSuccess />} />

          <Route path="/findPass" element={<FindPass />}/>

          <Route path="*" element={<NotFound />} /> {/* NotFound 페이지 추가 */}
          <Route path="/sendEmail" element={<SendEmail />}/>
          <Route path="/signupSuccess" element={<SignupSuccess />}/>
          <Route path="/SignupFail" element={<SignupFail />}/>
      </Routes>
    </Router>
  );
};

export default App;