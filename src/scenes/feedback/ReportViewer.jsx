// ReportViewer.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const ReportViewer = ({ report }) => {
  return (
    <Box>
      <Typography variant="h6">Review Report</Typography>
      {report.criteria.map((criteria, index) => (
        <Typography key={index}>
          {criteria.name}: {criteria.rating} / 5
        </Typography>
      ))}
      <Typography variant="body1">Comments: {report.comments}</Typography>
    </Box>
  );
};

export default ReportViewer;
