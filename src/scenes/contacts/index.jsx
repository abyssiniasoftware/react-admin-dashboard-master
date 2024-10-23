import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    const columns = [
      { field: "id", headerName: "ID", flex: 0.5 },
      { field: "registrarId", headerName: "Registrar ID" },
      {
        field: "title",
        headerName: "Title",
        flex: 1,
        cellClassName: "title-column--cell",
      },
      {
        field: "author",
        headerName: "Author",
        flex: 1,
        cellClassName: "author-column--cell",
      },
      {
        field: "publicationYear",
        headerName: "Publication Year",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "genre",
        headerName: "Genre",
        flex: 1,
      },
      {
        field: "isbn",
        headerName: "ISBN",
        flex: 1,
      },
      {
        field: "publisher",
        headerName: "Publisher",
        flex: 1,
      },
      {
        field: "copiesAvailable",
        headerName: "Copies Available",
        type: "number",
        flex: 1,
        headerAlign: "left",
        align: "left",
      },
    ];
  
    return (
      <Box m="20px">
        <Header
          title="INVOICES"
          subtitle="List of Books Available"
        />
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
            rows={mockDataContacts} // Ensure you are using the correct mock data here
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            autoHeight // Optional: Adjusts height automatically based on content
          />
        </Box>
      </Box>
    );
  };
 
  
export default Contacts;
