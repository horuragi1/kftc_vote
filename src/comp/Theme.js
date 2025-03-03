import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../assets/fonts/styles.css';

const Theme = createTheme({
  typography: {
    fontFamily: ' "MyFont" ,"Noto Sans KR", "Arial", sans-serif',
    fontWeight: 'fontWeightBold',
  },
});

export default Theme;