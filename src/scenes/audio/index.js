import { Box, Button, TextField, InputLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const AudioForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE AUDIO" subtitle="Add Audio Book Information" />

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
              {/* Audio File Upload */}
              <Box sx={{ gridColumn: "span 4" }}>
                <InputLabel>Upload Audio File</InputLabel>
                <input
                  type="file"
                  name="audioFile"
                  onChange={(event) => {
                    setFieldValue("audioFile", event.currentTarget.files[0]);
                  }}
                  accept="audio/*"
                  style={{ width: "100%", height: "60px" }}
                />
                {touched.audioFile && errors.audioFile && (
                  <div style={{ color: "red" }}>{errors.audioFile}</div>
                )}
              </Box>

              {/* Audio File Name */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Audio File Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.audioFileName}
                name="audioFileName"
                error={!!touched.audioFileName && !!errors.audioFileName}
                helperText={touched.audioFileName && errors.audioFileName}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Audio Narrator */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Audio Narrator"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.audioNarrator}
                name="audioNarrator"
                error={!!touched.audioNarrator && !!errors.audioNarrator}
                helperText={touched.audioNarrator && errors.audioNarrator}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Audio Book Name */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Audio Book Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.audioBookName}
                name="audioBookName"
                error={!!touched.audioBookName && !!errors.audioBookName}
                helperText={touched.audioBookName && errors.audioBookName}
                sx={{ gridColumn: "span 2" }}
              />

              {/* Audio Book Publisher */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Audio Book Publisher"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.audioBookPublisher}
                name="audioBookPublisher"
                error={!!touched.audioBookPublisher && !!errors.audioBookPublisher}
                helperText={touched.audioBookPublisher && errors.audioBookPublisher}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Audio Book
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  audioFile: yup.mixed().required("Audio File is required"),
  audioFileName: yup.string().required("Audio File Name is required"),
  audioNarrator: yup.string().required("Audio Narrator is required"),
  audioBookName: yup.string().required("Audio Book Name is required"),
  audioBookPublisher: yup.string().required("Audio Book Publisher is required"),
});

const initialValues = {
  audioFile: null,
  audioFileName: "",
  audioNarrator: "",
  audioBookName: "",
  audioBookPublisher: "",
};

export default AudioForm;
