import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Get In Touch
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              sx={{ p: 4 }}
              elevation={3}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%' }} elevation={3}>
              <Typography variant="h5" gutterBottom>
                Connect With Me
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Button
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/aiyatullah-saiyed-8b4538251/"
                    target="_blank"
                    variant="outlined"
                    fullWidth
                    sx={{ justifyContent: 'flex-start', mb: 2 }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Aiyatullah"
                    target="_blank"
                    variant="outlined"
                    fullWidth
                    sx={{ justifyContent: 'flex-start', mb: 2 }}
                  >
                    GitHub
                  </Button>
                  <Button
                    startIcon={<EmailIcon />}
                    href="mailto:zeelsaiyed12@gmail.com"
                    variant="outlined"
                    fullWidth
                    sx={{ justifyContent: 'flex-start' }}
                  >
                    Email
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;