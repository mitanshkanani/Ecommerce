import React from 'react';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';

const NewsletterSection = () => {
  return (
    <Grid item xs={12} container justifyContent="center">
      <Box>
        <Typography variant="h4" component="h2" align="center" marginBottom="1rem">
          Subscribe to Our Newsletter
        </Typography>
        <TextField
          variant="outlined"
          label="Enter your email address"
          size="small"
          fullWidth
        />
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '1rem',color:'black' }}>
          Subscribe
        </Button>
      </Box>
    </Grid>
  );
};

export default NewsletterSection;
