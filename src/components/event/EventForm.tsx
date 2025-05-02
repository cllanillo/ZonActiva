import Typography from '@mui/material/Typography';
import { Formik } from 'formik';
import { useMemo } from 'react';
import * as Yup from 'yup';
import { FormikDateRange, FormikFile, FormikSubmit, FormikText } from '🪟/field';

export default function EventForm() {
  const yupSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string()
          .max(25, ({ max }) => `Name must be less than ${max} charaters`)
          .required('Name is required'),
        date: Yup.date().required('Date is required'),
        category: Yup.string().required('Category is required'),
        image: Yup.object().required('Image is required'),
      }),
    [],
  );

  return (
    <Formik
      //   validationSchema={yupSchema}
      initialValues={{}}
      onSubmit={async (values) => {
        console.log('🚀 ~ onSubmit:', values);
        return null;
      }}
      children={<InnerForm />}
    />
  );
}

function InnerForm() {
  //   console.log('🚀 ~ InnerForm ~ p:', p);
  return (
    <form
      sx={{
        height: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        '&>div': { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, '&>div': { display: 'flex', flexDirection: 'column', flexGrow: 1 } },
      }}
    >
      {/* Name, 📅, Category */}
      <div sx={{ mt: '54px', ml: '116px' }}>
        <div>
          <Typography variant="subtitle1">Name</Typography>
          <FormikText name="name" fullWidth />
        </div>
        <div>
          <Typography variant="subtitle1">Date</Typography>
          <FormikDateRange name="date" slotProps={{ textField: { fullWidth: true } }} />
        </div>
        <div>
          <Typography variant="subtitle1">Category</Typography>
          <FormikText name="category" fullWidth />
        </div>
      </div>

      {/* Imagen, Description */}
      <div>
        <div>
          <Typography variant="subtitle1">Imagen</Typography>
          <FormikFile name="image" />
        </div>

        <div>
          <Typography variant="subtitle1">Description</Typography>
          <FormikText name="name" multiline minRows={10} fullWidth />
        </div>
      </div>

      {/* Location, Save */}
      <div>
        <div>
          <Typography variant="subtitle1">Location</Typography>
          {/* <Field name="name" component={TextField} /> */}
        </div>

        <FormikSubmit sx={{ mt: 'auto' }} />
      </div>
    </form>
  );
}
