import React from 'react';

import CommonBanner from './CommonBanner';
import { Box, Divider, Container } from '@mui/material';

import image1 from '../assets/tj1.PNG';
import image2 from '../assets/tj2.PNG';

function Service_intro() {
  return (
    <>
      <CommonBanner title="서비스 안내" text="서비스 안내 관련 문구"/>

      <Container maxWidth="lg">
        <Box sx={{ padding: 3, backgroundColor: 'transparent' }}>
          <h1>금융결제원 전자투표 시스템이란?</h1>
          <Divider sx={{ margin: '20px 0', borderColor: 'gray', borderWidth: '1px' }} />
          <h3>전자투표 시스템 설명 문구</h3>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box sx={{ padding: 3, backgroundColor: 'transparent' }}>
          <h1>특징</h1>
          <Divider sx={{ margin: '20px 0', borderColor: 'gray', borderWidth: '1px' }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <img src={image1} alt="Image 1" style={{ width: '48%' }} />
            <img src={image2} alt="Image 2" style={{ width: '48%' }} />
          </Box>
        </Box>
      </Container>

    </>
  );
}

export default Service_intro;
