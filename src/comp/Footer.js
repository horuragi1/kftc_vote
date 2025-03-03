import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      {/* 여백을 위한 투명한 Box */}
      <Box sx={{ paddingTop: '20px' }} /> {/* 여백을 위해 paddingTop만 설정 */}

      <Box
        sx={{
          backgroundColor: '#333',
          color: 'white',
          padding: '20px 0',
          marginTop: 'auto', // 페이지 하단에 고정되게 하기
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2025 KFTC(Korea Financial Telecommunications and Clearings Institute). All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
