import React from 'react';

import CommonBanner from './CommonBanner';
import RadioWithText from './RadioWithText';
import { Container, Box } from '@mui/material';
import NameSearch from './NameSearch';
import { useState } from 'react';
import BasicSelect from './BasicSelect.tsx';
import TextField from '@mui/material/TextField';

function CreateVote() {

  const [selectedPerson, setSelectedPerson] = useState(null);

  const peopleList = [
    { id: 1, name: '고귀현' },
    { id: 2, name: '고가현' },
    { id: 3, name: '김민성' }
  ];
  
  const handleSelectPerson = (person) => {
    console.log('선택된 사람:', person);
    setSelectedPerson(person);  // 선택된 사람을 상태에 저장
  };

  return (
    <>
      <CommonBanner title="투표 생성" text="투표 생성 관련 문구"/>

      <Container maxWidth="lg">

        <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", padding: "20px"}}>
          <h3>투표 제목</h3>
          <TextField id="outlined-basic" label="제목" variant="outlined" sx={{ width: '50%' }}/>
        </Box>

        <Box sx={{width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", padding: "20px"}}>
          <h3>투표 설명</h3>
          <TextField id="outlined-basic" label="설명" variant="outlined" multiline sx={{ width: '50%' }}/>
        </Box>

        <RadioWithText text="투표 유형" radio1="기명" radio2="익명"/>
        <RadioWithText text="투표 대상" radio1="지정" radio2="미지정"/>

        <NameSearch peopleList={peopleList} onSelectPerson={handleSelectPerson} />

        <BasicSelect />

      </Container>

    </>
  );
}

export default CreateVote;
