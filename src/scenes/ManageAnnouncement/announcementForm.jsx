import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const AnnouncementForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE ANNOUNCEMENT" subtitle="Create a New Announcement" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={announcementSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Announcement Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Content"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.content}
                name="content"
                error={!!touched.content && !!errors.content}
                helperText={touched.content && errors.content}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Creator"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.creator}
                name="creator"
                error={!!touched.creator && !!errors.creator}
                helperText={touched.creator && errors.creator}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.datePosted}
                name="datePosted"
                error={!!touched.datePosted && !!errors.datePosted}
                helperText={touched.datePosted && errors.datePosted}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create Announcement
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const announcementSchema = yup.object().shape({
  title: yup.string().required("Announcement title is required"),
  content: yup.string().required("Content is required"),
  creator: yup.string().required("Creator name is required"),
  datePosted: yup.date().required("Date posted is required").nullable(),
});

const initialValues = {
  title: "",
  content: "",
  creator: "",
  datePosted: null,
};

export default AnnouncementForm;
