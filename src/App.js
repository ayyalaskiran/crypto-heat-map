import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './components/Pages/HomePage';
import NotFoundPage from './components/Pages/NotFoundPage';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#111111"
    },
    typography: {
      fontFamily: 'Montserrat,sans-serif',
    },
    text: {
      primary: "#ffffff"
    },
  }
});

function App() {
  return (
    <>
    <Router>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </Box>
      </ThemeProvider>
    </Router>
    </>
  );
}

export default App;