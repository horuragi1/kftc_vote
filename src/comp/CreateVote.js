import React from 'react';

import CommonBanner from './CommonBanner';
import RadioWithText from './RadioWithText';
import { Container } from '@mui/material';
import NameSearch from './NameSearch';
import { useState } from 'react';
import BasicSelect from './BasicSelect.tsx';

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

        <RadioWithText text="투표 유형" radio1="기명" radio2="익명"/>
        <RadioWithText text="투표 대상" radio1="지정" radio2="미지정"/>

        <NameSearch peopleList={peopleList} onSelectPerson={handleSelectPerson} />

        <BasicSelect />

      </Container>

    </>
  );
}

export default CreateVote;
