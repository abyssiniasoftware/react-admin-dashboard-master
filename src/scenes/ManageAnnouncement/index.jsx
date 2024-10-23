import { Box, Typography, useTheme, IconButton, Modal, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Edit, CheckCircle, PendingActions } from "@mui/icons-material";
import Header from "../../components/Header";
import { useState } from "react";

const ManageAnnouncement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State for announcements
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "New Features Launched!",
      content: "Check out our new features launched this week!",
      creator: "John Doe",
      datePosted: "2024-10-17",
      status: "active",
    },
    {
      id: 2,
      title: "Upcoming Webinar",
      content: "Join our upcoming webinar on content creation!",
      creator: "Jane Smith",
      datePosted: "2024-10-15",
      status: "pending",
    },
    // Add more rows as needed
  ]);

  // Modal state
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", id: null });

  // Toggle Status Function
  const toggleStatus = (id) => {
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.map((announcement) =>
        announcement.id === id
          ? { ...announcement, status: announcement.status === "active" ? "pending" : "active" }
          : announcement
      )
    );
  };

  // Open modal for edit action
  const handleEdit = (id) => {
    setModalContent({ title: "Edit", id });
    setOpenModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Columns with dynamic status icons
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title",
      headerName: "Announcement Title",
      flex: 1,
    },
    {
      field: "content",
      headerName: "Content",
      flex: 2,
      renderCell: (params) => (
        <Typography variant="body2">{params.row.content}</Typography>
      ),
    },
    {
      field: "creator",
      headerName: "Creator",
      flex: 1,
    },
    {
      field: "datePosted",
      headerName: "Date Posted",
      flex: 1,
    },
    {
      field: "managementAction",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Box display="flex" gap={1}>
          <IconButton
            color={params.row.status === "active" ? "success" : "warning"}
            size="small"
            onClick={() => toggleStatus(params.row.id)}
            title={params.row.status === "active" ? "Deactivate" : "Activate"}
          >
            {params.row.status === "active" ? (
              <CheckCircle fontSize="small" />
            ) : (
              <PendingActions fontSize="small" />
            )}
          </IconButton>
          <IconButton
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row.id)}
            title="Edit"
          >
            <Edit fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="ANNOUNCEMENTS" subtitle="List of Announcements" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            overflowX: 'auto',
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={announcements} columns={columns} />
      </Box>

      {/* Modal for editing */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={400}
          bgcolor="background.paper"
          borderRadius="8px"
          boxShadow={24}
          p={4}
        >
          <Typography variant="h6" mb={2}>
            Edit Announcement
          </Typography>
          <Typography variant="body2" mb={2}>
            Editing announcement ID: {modalContent.id}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCloseModal}>
            Confirm
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleCloseModal} sx={{ ml: 2 }}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ManageAnnouncement;
