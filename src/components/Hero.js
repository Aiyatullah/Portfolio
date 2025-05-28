import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import resumePDF from '../assets/resume.pdf';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Stack spacing={4} alignItems="flex-start">
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm <b><i>Saiyed Aiyatullah</i></b>
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Full Stack Developer & AI Enthusiast
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              href={resumePDF}
              download
              startIcon={<DownloadIcon />}
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/Aiyatullah"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<CodeIcon />}
              href="https://leetcode.com/u/aiyatullah/"
              target="_blank"
            >
              LeetCode (250+ solved)
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;