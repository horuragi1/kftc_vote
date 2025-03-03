import React from 'react';
import { Box, Container } from '@mui/material';
import RecentPosts from './RecentPosts';

import Banner from './Banner';

function MainContent() {
  return (
    <>
        <Banner />

        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            paddingLeft: 0,
        }}
        >
        <Container maxWidth="lg">
            <div style={{ padding: '20px', textAlign: 'left' }}>
            <h1>진행중인 공개투표</h1>
            </div>
        </Container>

        <Container maxWidth="lg">
            <RecentPosts />
        </Container>
        </Box>
    </>
  );
}

export default MainContent;
