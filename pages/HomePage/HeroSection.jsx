import React from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';

const HeroSection = () => {
  return (
    <Container style={{ padding: '50px 0', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom     style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
        }} >
        Finding the Best Courses & Upgrade your Skill
      </Typography>
      <Typography variant="body1" paragraph style={{ fontFamily: 'Arial, sans-serif' }}>
      "Unlock Your Potential with Stellar Classes—Where Excellence Meets Opportunity!"
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search What Do You Want to Learn"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" sx={{ backgroundColor: '#45a049' }} size="large">
        Search
      </Button>
    </Container>
  );
};

export default HeroSection;


