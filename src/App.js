import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // react-router-dom import
import Login from './comp/Login';
import Page1 from './comp/Page1';

import Service_intro from './comp/Service_intro';
import CreateVote from './comp/CreateVote';
import ParticipateVote from './comp/ParticipateVote';
import MyPage from './comp/MyPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // 로그인 성공 시 로그인 상태 변경
  };

  return (
    <Router> {/* Router로 애플리케이션을 감쌈 */}
      <div className="App">
        <Routes> {/* 라우터를 설정 */}
          {/* 로그인 페이지 */}
          <Route path="/" element={isLoggedIn ? <Page1 /> : <Login onLoginSuccess={handleLoginSuccess} />} />

          {/* 추가적인 라우트는 여기에 추가 가능 */}
          {/* <Route path="/page1" element={<Page1 />} /> */}

          <Route path="/service-intro" element={<Service_intro />} />
          <Route path="/create-vote" element={<CreateVote />} />
          <Route path="/participate-vote" element={<ParticipateVote />} />
          <Route path="/my-page" element={<MyPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
