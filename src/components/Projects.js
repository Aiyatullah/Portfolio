import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'AI Interview Mocker',
    description: 'A standalone AI-powered mock interview platform to help users practice technical and HR interviews. Integrated Gemini AI for dynamic question generation and intelligent follow-up queries. Used NLP to analyze user responses and provide real-time feedback on clarity, accuracy, and confidence.',
    technologies: ['Next.js', 'Gemini AI', 'JavaScript', 'Firebase', 'NLP'],
    github: 'https://github.com/Aiyatullah/Ai-interview-mocker'
  },
  {
    title: 'Voice Assistant – Neural Havoc (1.0)',
    description: 'Built a voice-controlled assistant prototype with real-time gesture control using YOLO driven object detection. Implemented MediaPipe for hand tracking and OpenCV for visual processing to enable smooth interaction. Integrated speech-based control for a more seamless and interactive experience.',
    technologies: ['YOLO', 'OpenCV', 'MediaPipe', 'Text-to-Speech', 'Python'],
    github: 'https://github.com/Aiyatullah/Neural-havoc'
  },
  {
    title: 'AI-Powered Job Portal',
    description: 'Contributed to the development of an AI-integrated job portal enabling smart recommendations and chatbot support. Features include intelligent job matching and AI-powered candidate screening.',
    technologies: ['React.js', 'Flask', 'MongoDB', 'LLaMA 3', 'Gemini AI'],
    github: 'https://github.com/Aiyatullah/UnderGraduate-Job-Potal'
  }
];

const Projects = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Featured Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white'
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    size="small"
                    variant="contained"
                    sx={{
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    View on GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;