import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrainIcon from '@mui/icons-material/Psychology';

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)' }
              }}
            >
              <CodeIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Frontend Development
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Experienced in building responsive and interactive web applications using React.js, Next.js, and modern frontend technologies.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)' }
              }}
            >
              <StorageIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Backend Development
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Proficient in developing robust backend systems using Node.js, Flask, Django, and managing databases like MongoDB and PostgreSQL.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                transition: '0.3s',
                '&:hover': { transform: 'translateY(-5px)' }
              }}
            >
              <BrainIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                AI & Machine Learning
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Skilled in implementing AI solutions using TensorFlow, scikit-learn, and working with advanced models like Gemini AI and LLaMA.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;