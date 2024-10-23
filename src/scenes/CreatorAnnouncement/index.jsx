import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SendIcon from '@mui/icons-material/Send';

// Mock Data for demonstration
const mockComments = [
  { id: 1, user: 'User1', comment: 'Great announcement!', replies: [] },
  { id: 2, user: 'User2', comment: 'Looking forward to the content.', replies: [] },
];

const mockBookRequests = [
  { id: 1, title: 'Book A', author: 'Author 1' },
  { id: 2, title: 'Book B', author: 'Author 2' },
];

const CreatorAnnouncement = () => {
  const [announcement, setAnnouncement] = useState('');
  const [comments, setComments] = useState(mockComments);
  const [bookRequests, setBookRequests] = useState(mockBookRequests);
  const [reviewRequests, setReviewRequests] = useState([]);

  const handlePostAnnouncement = () => {
    console.log('Announcement posted:', announcement);
    setAnnouncement('');
  };

  const handleAddReply = (id) => {
    // Logic to add a reply to a comment
    console.log('Reply added to comment ID:', id);
  };

  const handleRequestReview = (bookId) => {
    const book = bookRequests.find((book) => book.id === bookId);
    setReviewRequests([...reviewRequests, book]);
    console.log('Review requested for:', book.title);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Announcement Section */}
      <Typography variant="h5">Post an Announcement</Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
        placeholder="Write your announcement here..."
        sx={{ marginBottom: '20px', marginTop: '10px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handlePostAnnouncement}
        endIcon={<SendIcon />}
      >
        Post Announcement
      </Button>

      <Divider sx={{ margin: '20px 0' }} />

      {/* Comments and Replies Section */}
      <Typography variant="h5">Comments and Replies</Typography>
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id} component={Paper} sx={{ marginBottom: '10px' }}>
            <ListItemText
              primary={`${comment.user}: ${comment.comment}`}
              secondary={
                comment.replies.length > 0 && (
                  <Box>
                    {comment.replies.map((reply, index) => (
                      <Typography variant="body2" key={index}>
                        {reply}
                      </Typography>
                    ))}
                  </Box>
                )
              }
            />
            <IconButton onClick={() => handleAddReply(comment.id)} color="primary">
              <AddCommentIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ margin: '20px 0' }} />

      {/* Book Requests Section */}
      <Typography variant="h5">Book Requests</Typography>
      <List>
        {bookRequests.map((book) => (
          <ListItem key={book.id} component={Paper} sx={{ marginBottom: '10px' }}>
            <ListItemText primary={`${book.title} by ${book.author}`} />
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleRequestReview(book.id)}
              endIcon={<RateReviewIcon />}
            >
              Request Review
            </Button>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ margin: '20px 0' }} />

      {/* Review Requests Section */}
      <Typography variant="h5">Review Requests</Typography>
      {reviewRequests.length === 0 ? (
        <Typography>No review requests made yet.</Typography>
      ) : (
        <List>
          {reviewRequests.map((book) => (
            <ListItem key={book.id} component={Paper} sx={{ marginBottom: '10px' }}>
              <ListItemText primary={`Review Requested: ${book.title} by ${book.author}`} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default CreatorAnnouncement;
