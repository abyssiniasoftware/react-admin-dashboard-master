// src/PaymentDetails.js

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme'; // Import your theme tokens

// Mock Data
const paymentData = [
  {
    id: 1,
    customer: 'John Doe',
    books: ['Book A', 'Book B'],
    receipt: 'receipt1.jpg',
    verified: false,
    approved: false,
  },
  {
    id: 2,
    customer: 'Jane Smith',
    books: ['Book C'],
    receipt: 'receipt2.jpg',
    verified: false,
    approved: false,
  },
];

// Custom styles
const ReceiptImage = styled('img')({
  width: '80px',
  height: 'auto',
  cursor: 'pointer',
});

const PaymentDetails = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [payments, setPayments] = useState(paymentData);

  // Handle verification
  const handleVerify = (id) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.id === id ? { ...payment, verified: true } : payment
      )
    );
  };

  // Handle approval
  const handleApprove = (id) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.id === id ? { ...payment, approved: true } : payment
      )
    );
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ color: colors.primary[600] }}>
        Payment Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: colors.blueAccent[700] }}>
              <TableCell sx={{ color: colors.grey[100] }}>Customer</TableCell>
              <TableCell sx={{ color: colors.grey[100] }}>Books Purchased</TableCell>
              <TableCell sx={{ color: colors.grey[100] }}>Receipt</TableCell>
              <TableCell sx={{ color: colors.grey[100] }}>Verified</TableCell>
              <TableCell sx={{ color: colors.grey[100] }}>Approved</TableCell>
              <TableCell sx={{ color: colors.grey[100] }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id} sx={{ backgroundColor: colors.primary[400] }}>
                <TableCell sx={{ color: colors.greenAccent[300] }}>{payment.customer}</TableCell>
                <TableCell sx={{ color: colors.greenAccent[300] }}>
                  {payment.books.join(', ')}
                </TableCell>
                <TableCell>
                  <ReceiptImage src={payment.receipt} alt="Receipt" />
                </TableCell>
                <TableCell>
                  {payment.verified ? (
                    <CheckCircleIcon sx={{ color: colors.greenAccent[600] }} />
                  ) : (
                    <CancelIcon sx={{ color: colors.redAccent[600] }} />
                  )}
                </TableCell>
                <TableCell>
                  {payment.approved ? (
                    <CheckCircleIcon sx={{ color: colors.greenAccent[600] }} />
                  ) : (
                    <CancelIcon sx={{ color: colors.redAccent[600] }} />
                  )}
                </TableCell>
                <TableCell>
                  {!payment.verified && (
                    <Button
                      variant="outlined"
                      onClick={() => handleVerify(payment.id)}
                      sx={{
                        borderColor: colors.blueAccent[500],
                        color: colors.blueAccent[500],
                        '&:hover': {
                          backgroundColor: colors.blueAccent[700],
                          borderColor: colors.blueAccent[700],
                        },
                      }}
                    >
                      Verify
                    </Button>
                  )}
                  {payment.verified && !payment.approved && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleApprove(payment.id)}
                      sx={{
                        backgroundColor: colors.greenAccent[600],
                        '&:hover': {
                          backgroundColor: colors.greenAccent[700],
                        },
                      }}
                    >
                      Approve
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaymentDetails;
