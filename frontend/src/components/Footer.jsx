import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import { Link as Lk } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#cc7e00', padding: '1rem', position: 'relative', width: 'auto', bottom: '0',marginTop:'3rem',color:'papayawhip'}}>
      <Grid container justifyContent="center">
        <Box>
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} ShopSmart. All rights reserved.
          </Typography>
          <Box marginTop="0.5rem">
            <Lk to='/about' style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>About Us</Lk>
            <Lk to='/policy' style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>Privacy Policy</Lk>
            <Lk to='/conditions' style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>Terms of Service</Lk>
            <Lk to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Lk>
          </Box>
          <Box marginTop="1rem" textAlign="center">
            <IconButton component="a" href="https://github.com/mitanshkanani" target="_blank" rel="noopener noreferrer" color='#663f00'>
              <GitHubIcon />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/in/mitansh-kanani-9a80812b6/" target="_blank" rel="noopener noreferrer" color='#663f00'>
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href="https://twitter.com/mitansh1234" target="_blank" rel="noopener noreferrer" color='#663f00'>
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </footer>
  );
};

export default Footer;
