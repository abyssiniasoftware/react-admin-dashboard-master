import { Box, Button, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const BookForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE BOOK" subtitle="Add a New Book" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={bookSchema}
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
              {/* Book Name */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Book Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bookName}
                name="bookName"
                error={!!touched.bookName && !!errors.bookName}
                helperText={touched.bookName && errors.bookName}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Book Number */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Book Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bookNumber}
                name="bookNumber"
                error={!!touched.bookNumber && !!errors.bookNumber}
                helperText={touched.bookNumber && errors.bookNumber}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Type of Book (Dropdown) */}
              <TextField
                select
                fullWidth
                variant="filled"
                label="Type of Book"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.typeOfBook}
                name="typeOfBook"
                error={!!touched.typeOfBook && !!errors.typeOfBook}
                helperText={touched.typeOfBook && errors.typeOfBook}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="fiction">Fiction</MenuItem>
                <MenuItem value="educational">Educational</MenuItem>
                <MenuItem value="comedy">Comedy</MenuItem>
                <MenuItem value="comedy">Audio book</MenuItem>
                <MenuItem value="others">Others</MenuItem>
              </TextField>

              {/* Author */}
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
                sx={{ gridColumn: "span 2" }}
              />

              {/* Publisher */}
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
                sx={{ gridColumn: "span 2" }}
              />

              {/* Price */}
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// Validation Schema
const bookSchema = yup.object().shape({
  bookName: yup.string().required("Book name is required"),
  bookNumber: yup.string().required("Book number is required"),
  typeOfBook: yup.string().required("Please select a book type"),
  author: yup.string().required("Author is required"),
  publisher: yup.string().required("Publisher is required"),
  price: yup.number().required("Price is required").min(0, "Price cannot be negative"),
});

// Initial Form Values
const initialValues = {
  bookName: "",
  bookNumber: "",
  typeOfBook: "",
  author: "",
  publisher: "",
  price: "",
};

export default BookForm;
