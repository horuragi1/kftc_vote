import React from 'react';
import { Box, Typography, Container } from '@mui/material';

import character from "../assets/gg.png";

const CommonBanner = ({title, text}) => {
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
        flexDirection: 'column', // 위에서 아래로 쌓이게 설정
        justifyContent: 'center',
        alignItems: 'flex-start', // 가로 방향 왼쪽 정렬,
        color: 'white',  // 텍스트 색상 설정
        textAlign: 'center',
        padding: '0 20px',  // 양쪽 여백
        zIndex: 1,
    }}
    >

        <Container maxWidth="lg">
            {/* 제목 텍스트 */}
            <Typography variant="h3" sx={{ fontWeight: 'bold', zIndex: 2, textAlign: 'left' }}>
                {title}
            </Typography>
            
            {/* 본문 텍스트 */}
            <Typography variant="body1" sx={{ fontWeight: 'bold', zIndex: 2, mt: 2, textAlign: 'left' }}>
                {text}
            </Typography>
        </Container>

    </Box>
    
  );
};

export default CommonBanner;
