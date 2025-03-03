import React, { useState } from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Theme from './Theme';

const RadioWithText = ({ text, radio1, radio2 }) => {
  const [selectedValue, setSelectedValue] = useState(''); // 선택된 라디오 버튼 값

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px' }}>
        {/* 왼쪽에 텍스트 */}
        <Typography variant="body1" sx={{ marginRight: 2 }}>
          {text}
        </Typography>

        {/* 라디오 버튼 그룹 */}
        <RadioGroup row value={selectedValue} onChange={handleRadioChange} sx={{ display: 'flex', alignItems: 'center' }}>
          {/* 첫 번째 라디오 버튼과 그 하단의 라벨 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Radio value="radio1" />
            <Typography variant="body2">{radio1}</Typography>
          </Box>

          {/* 두 번째 라디오 버튼과 그 하단의 라벨 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Radio value="radio2" />
            <Typography variant="body2">{radio2}</Typography>
          </Box>
        </RadioGroup>
      </Box>
    </ThemeProvider>
  );
};

export default RadioWithText;
