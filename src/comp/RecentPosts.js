import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

const RecentPosts = () => {
  // 게시글 데이터를 상태로 관리
  const [posts, setPosts] = useState([]);

  // 데이터를 가져오는 함수 (여기서는 가상의 데이터 사용)
  useEffect(() => {
    // 예시로 5개의 게시글 데이터를 설정
    const fetchPosts = async () => {
      const postsData = [
        { id: 1, title: '투표 1' },
        { id: 2, title: '투표 2' },
        { id: 3, title: '투표 3' },
        { id: 4, title: '투표 4' },
        { id: 5, title: '투표 5' },
      ];
      setPosts(postsData); // 상태에 게시글 데이터 저장
    };

    fetchPosts();
  }, []);

  const handleClick = (title) => {
    alert(`클릭한 게시글: ${title}`);
  };

  return (
    <Box
      sx={{
        border: '2px solid #ccc',  // 테두리 설정
        padding: '20px',
        borderRadius: '8px',  // 모서리 둥글게 설정
        display: 'flex',
        flexDirection: 'column',  // 세로로 배치
        gap: '10px',  // 항목 간 간격
        width: '250px',  // 박스 너비
        //margin: 'auto',  // 가운데 정렬
        alignItems: 'flex-start',  // 가로 방향 정렬: 왼쪽으로 정렬
      }}
    >
      {/*<Typography variant="h6">최근 5개의 게시글</Typography>*/}
      {/* 최근 5개의 게시글 제목을 Button으로 표시 */}
      {posts.map((post) => (
        <Button key={post.id} onClick={() => handleClick(post.title)} sx={{ textAlign: 'left', fontWeight: 'bold' }}>
          {post.title}
        </Button>
      ))}
    </Box>
  );
};

export default RecentPosts;
