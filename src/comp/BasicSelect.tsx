import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [voteType, setVoteType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setVoteType(event.target.value as string);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px', width: '50%', // 또는 원하는 크기 (예: '500px', '80vw' 등)
      minWidth: '300px', // 최소 너비 설정 
      margin: 'auto', }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">투표 종류 선택</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={voteType}
          label="투표 종류 선택"
          onChange={handleChange}
        >
          <MenuItem value={10}>찬반투표</MenuItem>
          <MenuItem value={20}>단일선택투표</MenuItem>
          <MenuItem value={30}>복수선택투표</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
