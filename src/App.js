import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC',  // Elegant purple
      light: '#CBB2FC',
      dark: '#9A68FC',
    },
    secondary: {
      main: '#03DAC6',  // Teal accent
      light: '#33E2D1',
      dark: '#00B3A1',
    },
    background: {
      default: '#121212',  // Dark background
      paper: '#1E1E1E',    // Slightly lighter dark for cards
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        outlined: {
          borderColor: '#BB86FC',
          '&:hover': {
            borderColor: '#CBB2FC',
            backgroundColor: 'rgba(187, 134, 252, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1E1E1E',
          '&:hover': {
            backgroundColor: '#252525',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Box id="home">
          <Hero />
        </Box>
        <Box id="about">
          <About />
        </Box>
        <Box id="skills">
          <Skills />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;

// ... existing code ...
