import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Box, Container } from '@mui/material';
import Logo from '../assets/kftc.png'; // 로고 이미지 경로

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// 🔹 재사용 가능한 NavButton 컴포넌트 생성
function NavButton({ text, onNavChange, component}) {

  //const navigate = useNavigate(); // useNavigate 훅을 호출하여 navigate 함수 생성

  return (
    <Button 
      sx={{ 
        flex: 1, 
        fontWeight: 'bold', 
        '&:hover': { backgroundColor: 'blue', color: 'white' } 
      }}

      onClick={() => onNavChange(component)}
      //onClick={() => navigate(to)} // onClick 이벤트에서 navigate 호출
    >
      {text}
    </Button>
  );
}

function MyAppBar({onNavChange}) {

  var myColor = "primary";

  //const navigate = useNavigate(); // 페이지 이동 함수

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="lg"> {/* maxWidth를 lg(1200px)로 설정 */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* 왼쪽 로고 */}
          {/*<IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/')}>*/}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => onNavChange('main')} >
            <img src={Logo} alt="Logo" style={{ width: 160, height: 40 }} />
          </IconButton>

          {/* 메뉴 항목 */}
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <NavButton text="서비스 소개" onNavChange={onNavChange} component="service-intro" />
            <NavButton text="투표 생성" onNavChange={onNavChange} component="create-vote" />
            <NavButton text="투표 참여" onNavChange={onNavChange} component="participate-vote" />
            <NavButton text="마이 페이지" onNavChange={onNavChange} component="my-page" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MyAppBar;
