import { Box, Button, TextField, InputLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const SaleForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE SALE" subtitle="Add Sale Information for Books or Digital Assets" />

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
          setFieldValue,
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
              {/* Start Date */}
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label=""
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.startDate}
                name="startDate"
                error={!!touched.startDate && !!errors.startDate}
                helperText={touched.startDate && errors.startDate}
                sx={{ gridColumn: "span 2" }}
              />

              {/* End Date */}
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label=""
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endDate}
                name="endDate"
                error={!!touched.endDate && !!errors.endDate}
                helperText={touched.endDate && errors.endDate}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Author Name */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Author Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.authorName}
                name="authorName"
                error={!!touched.authorName && !!errors.authorName}
                helperText={touched.authorName && errors.authorName}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Digital Artist */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Digital Artist"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.digitalArtist}
                name="digitalArtist"
                error={!!touched.digitalArtist && !!errors.digitalArtist}
                helperText={touched.digitalArtist && errors.digitalArtist}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Composer */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Composer"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.composer}
                name="composer"
                error={!!touched.composer && !!errors.composer}
                helperText={touched.composer && errors.composer}
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

              {/* Books/Digital Assets */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Books/Digital Assets"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.assets}
                name="assets"
                error={!!touched.assets && !!errors.assets}
                helperText={touched.assets && errors.assets}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Sale Information */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sale Info"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.saleInfo}
                name="saleInfo"
                error={!!touched.saleInfo && !!errors.saleInfo}
                helperText={touched.saleInfo && errors.saleInfo}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Receipt File Upload */}
              <Box sx={{ gridColumn: "span 4" }}>
                <InputLabel>Upload Receipt</InputLabel>
                <input
                  type="file"
                  name="receipt"
                  onChange={(event) => {
                    setFieldValue("receipt", event.currentTarget.files[0]);
                  }}
                  accept="image/*,application/pdf"
                />
                {touched.receipt && errors.receipt && (
                  <div style={{ color: "red" }}>{errors.receipt}</div>
                )}
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Sale
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  startDate: yup.date().required("Start Date is required"),
  endDate: yup.date().required("End Date is required"),
  authorName: yup.string().required("Author Name is required"),
  digitalArtist: yup.string(),
  composer: yup.string(),
  publisher: yup.string().required("Publisher is required"),
  assets: yup.string().required("Books/Digital Assets are required"),
  saleInfo: yup.string().required("Sale Info is required"),
  receipt: yup.mixed().required("Receipt is required"),
});

const initialValues = {
  startDate: "",
  endDate: "",
  authorName: "",
  digitalArtist: "",
  composer: "",
  publisher: "",
  assets: "",
  saleInfo: "",
  receipt: null,
};

export default SaleForm;
