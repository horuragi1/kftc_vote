import React, { useState } from 'react';
import MyAppBar from './MyAppBar';  // MyAppBar 컴포넌트를 임포트
import Banner from './Banner';
import { Container, Box } from '@mui/material';  // Container와 Box 추가

import RecentPosts from './RecentPosts';
import Footer from './Footer';
import MainContent from './MainContent';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // react-router-dom import

import Service_intro from './Service_intro';
import CreateVote from './CreateVote';
import ParticipateVote from './ParticipateVote';
import MyPage from './MyPage';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../assets/fonts/styles.css';
const theme = createTheme({
  typography: {
    fontFamily: ' "MyFont" ,"Noto Sans KR", "Arial", sans-serif',
  },
});

const Page1 = () => {

  const [activeComponent, setActiveComponent] = useState('main');  // 현재 활성화된 컴포넌트 상태

  // 버튼 클릭 시 호출되어 activeComponent를 변경하는 함수
  const handleNavChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // 위에서 아래로 쌓이게 설정
          minHeight: '100vh', // 최소 높이를 100vh로 설정하여 화면 전체를 차지하도록
        }}
      >
        {/* MyAppBar를 페이지 상단에 포함 */}
        <MyAppBar onNavChange={handleNavChange}/>

        {/* activeComponent에 따라 렌더링할 컴포넌트 선택 */}
        {activeComponent === 'main' && <MainContent />}
        {activeComponent === 'participate-vote' && <ParticipateVote />}
        {activeComponent === 'create-vote' && <CreateVote />}
        {activeComponent === 'service-intro' && <Service_intro />}
        {activeComponent === 'my-page' && <MyPage />}

        <Footer/>
      </Box>
    </ThemeProvider>
  );
};

export default Page1;
