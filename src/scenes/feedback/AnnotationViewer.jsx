// AnnotationViewer.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const AnnotationViewer = ({ annotations }) => {
  return (
    <Box>
      <Typography variant="h6">Annotations</Typography>
      {annotations.map((annotation, index) => (
        <Typography key={index}>
          Page {annotation.page}: {annotation.text} - {annotation.note}
        </Typography>
      ))}
    </Box>
  );
};

export default AnnotationViewer;
