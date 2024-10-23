// AuthorToAdminMessage.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

const AuthorToAdminMessage = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the message submission logic here
    console.log('Message sent:', message);
    setMessage(''); // Clear the input after submission
  };

  return (
    <Box 
      component={Paper} 
      sx={{
        padding: 2,
        backgroundColor: '#0A1E4B', // Very dark blue
        color: '#FFFFFF', // White text for contrast
        borderRadius: '8px',
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Message to author
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            backgroundColor: '#1A2A6B', // Darker blue for the text area
            borderRadius: '4px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFFFFF', // White border for the text field
              },
              '&:hover fieldset': {
                borderColor: '#FFFFFF', // White border on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFFFFF', // White border when focused
              },
            },
            marginBottom: 2,
          }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          sx={{
            backgroundColor: '#3E5C99', // A complementary dark blue color
            '&:hover': {
              backgroundColor: '#2D4A76', // Darker shade on hover
            },
          }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default AuthorToAdminMessage;
