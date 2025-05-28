import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'Python']
  },
  {
    title: 'Frontend Technology',
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Material UI']
  },
  {
    title: 'Backend Technology',
    skills: ['Node.js', 'Express.js', 'Flask', 'Django', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase', 'REST APIs']
  },
  {
    title: 'Machine Learning & AI',
    skills: ['TensorFlow', 'scikit-learn', 'NLP', 'Gemini AI', 'LLaMA models', 'Prompt Engineering', 'YOLO']
  },
  {
    title: 'Others',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'JSON', 'JWT', 'Firebase', 'NPM/Yarn']
  }
];

const Skills = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Skills & Technologies
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom color="primary">
                  {category.title}
                </Typography>
                <Grid container spacing={1}>
                  {category.skills.map((skill, skillIndex) => (
                    <Grid item key={skillIndex}>
                      <Paper
                        sx={{
                          px: 2,
                          py: 1,
                          bgcolor: 'primary.light',
                          color: 'primary.contrastText'
                        }}
                      >
                        {skill}
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;