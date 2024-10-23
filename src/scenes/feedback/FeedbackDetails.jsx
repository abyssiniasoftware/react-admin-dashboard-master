// FeedbackDetails.js
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Paper,
  Divider,
  Box,
} from '@mui/material';
import AnnotationViewer from './AnnotationViewer';
import ReportViewer from './ReportViewer';

const FeedbackDetails = ({ feedback, onClose }) => {
  return (
    <Dialog open={Boolean(feedback)} onClose={onClose}>
      <Paper sx={{ backgroundColor: '#0D1B2A', color: 'white', borderRadius: 2 }}>
        <DialogTitle sx={{ backgroundColor: '#1B2631', color: 'white', fontWeight: 'bold' }}>
          {`Feedback from ${feedback.reviewer}`}
        </DialogTitle>
        <Divider sx={{ backgroundColor: '#ffffff' }} /> {/* Divider for a formal touch */}
        <DialogContent sx={{ backgroundColor: '#0D1B2A', color: 'white' }}>
          <Typography variant="h6" gutterBottom>
            Comment:
          </Typography>
          <Typography variant="body1" paragraph>
            {feedback.comment}
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            Annotations:
          </Typography>
          <AnnotationViewer annotations={feedback.annotations} />

          <Typography variant="h6" gutterBottom>
            Review Report:
          </Typography>
          <ReportViewer report={feedback.report} />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#1B2631' }}>
          <Button onClick={onClose} sx={{ color: 'white', fontWeight: 'bold' }}>
            Close
          </Button>
        </DialogActions>
      </Paper>
    </Dialog>
  );
};

export default FeedbackDetails;
