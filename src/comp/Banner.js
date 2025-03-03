import React from 'react';
import { Box, Typography } from '@mui/material';

import character from "../assets/gg.png";

const Banner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px',  // 배너 높이 설정
        backgroundImage: 'url(https://example.com/your-image.jpg)', // 배경 이미지
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // 그라데이션 추가
        background: `linear-gradient(rgba(68, 114, 196, 0.4), rgba(68, 114, 196, 0.6)), url(${character})`,
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',  // 텍스트 색상 설정
        textAlign: 'center',
        padding: '0 20px',  // 양쪽 여백
        zIndex: 1,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', zIndex: 2 }}>
        금융결제원 전자투표 서비스 방문을 환영합니다.
      </Typography>
    </Box>
  );
};

export default Banner;
