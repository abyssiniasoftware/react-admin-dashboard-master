import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataMessages } from "../../data/data";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const AdminMessage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "messageTitle",
      headerName: "Message Title",
      flex: 1,
      cellClassName: "title-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
      cellClassName: "description-column--cell",
    },
    {
      field: "sender",
      headerName: "Sender",
      flex: 1,
      cellClassName: "sender-column--cell",
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <button
            style={{ marginRight: "10px", color: "green" }}
            onClick={() => handleReply(params.row.id)}
          >
            Reply
          </button>
          <button
            style={{ color: "red" }}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </button>
        </Box>
      ),
    },
  ];

  const handleReply = (id) => {
    alert(`Replying to message with ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Deleting message with ID: ${id}`);
  };

  return (
    <Box m="20px">
      <Header title="MESSAGES" subtitle="List of Received Messages" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .title-column--cell": {
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataMessages}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default AdminMessage;
