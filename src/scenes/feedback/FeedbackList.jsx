// FeedbackList.js
import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import FeedbackDetails from './FeedbackDetails';

const FeedbackList = ({ feedbackData }) => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  return (
    <Box>
      <Typography variant="h4" gutterBottom color="white">
        Feedback Overview
      </Typography>
      <List
        component={Paper}
        sx={{
          maxHeight: '400px',
          overflowY: 'auto',
          backgroundColor: '#0D1B2A', // Very dark blue color for the list
          color: 'white', // Text color
        }}
      >
        {feedbackData.map((feedback, index) => (
          <ListItem
            button
            key={index}
            onClick={() => setSelectedFeedback(feedback)}
            divider
            sx={{
              '&:hover': {
                backgroundColor: '#1B2631', // Darker blue on hover
              },
            }}
          >
            <ListItemText
              primary={`Review by ${feedback.reviewer}`}
              secondary={feedback.date}
              primaryTypographyProps={{ style: { color: 'white' } }} // White text for primary
              secondaryTypographyProps={{ style: { color: '#AAB8C2' } }} // Light gray for secondary
            />
          </ListItem>
        ))}
      </List>
      {selectedFeedback && (
        <FeedbackDetails
          feedback={selectedFeedback}
          onClose={() => setSelectedFeedback(null)}
        />
      )}
    </Box>
  );
};

export default FeedbackList;
