import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const AddBookForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="ADD BOOK" subtitle="Add a New Book to the Library" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
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
                label="Registrar ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.registrarId}
                name="registrarId"
                error={!!touched.registrarId && !!errors.registrarId}
                helperText={touched.registrarId && errors.registrarId}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
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
                label="Author"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.author}
                name="author"
                error={!!touched.author && !!errors.author}
                helperText={touched.author && errors.author}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Publication Year"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.publicationYear}
                name="publicationYear"
                error={!!touched.publicationYear && !!errors.publicationYear}
                helperText={touched.publicationYear && errors.publicationYear}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Genre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.genre}
                name="genre"
                error={!!touched.genre && !!errors.genre}
                helperText={touched.genre && errors.genre}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="ISBN"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.isbn}
                name="isbn"
                error={!!touched.isbn && !!errors.isbn}
                helperText={touched.isbn && errors.isbn}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Publisher"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.publisher}
                name="publisher"
                error={!!touched.publisher && !!errors.publisher}
                helperText={touched.publisher && errors.publisher}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Copies Available"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.copiesAvailable}
                name="copiesAvailable"
                error={!!touched.copiesAvailable && !!errors.copiesAvailable}
                helperText={touched.copiesAvailable && errors.copiesAvailable}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Book
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// Validation schema for the form
const checkoutSchema = yup.object().shape({
  registrarId: yup.string().required("Required"),
  title: yup.string().required("Required"),
  author: yup.string().required("Required"),
  publicationYear: yup
    .number()
    .integer("Must be a whole number")
    .min(0, "Must be a valid year")
    .required("Required"),
  genre: yup.string().required("Required"),
  isbn: yup.string().required("Required"),
  publisher: yup.string().required("Required"),
  copiesAvailable: yup
    .number()
    .integer("Must be a whole number")
    .min(0, "Must be at least 0")
    .required("Required"),
});

// Initial values for the form fields
const initialValues = {
  registrarId: "",
  title: "",
  author: "",
  publicationYear: "",
  genre: "",
  isbn: "",
  publisher: "",
  copiesAvailable: "",
};

export default AddBookForm;
