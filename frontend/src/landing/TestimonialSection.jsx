import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          What Our Customers Say
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Card variant="outlined" sx={{ height: '200px', width: '80%', margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" component="div" sx={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
                "ShopSmart helped me find amazing deals on products I love!" - John Doe
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <Card variant="outlined" sx={{ height: '200px', width: '80%', margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" component="div" sx={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
                "I've never had a better shopping experience! ShopSmart is my go-to for all my purchases." - Jane Smith
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          <Card variant="outlined" sx={{ height: '200px', width: '80%', margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent>
              <Typography variant="body1" component="div" sx={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'center' }}>
                "ShopSmart's personalized recommendations have saved me time and money. Highly recommended!" - Emily Johnson
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default TestimonialsSection;
