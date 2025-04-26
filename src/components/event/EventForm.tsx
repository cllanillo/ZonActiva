import Typography from '@mui/material/Typography';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Field, Formik } from 'formik';
import { Submit, TextField } from '🪟/field';

export default function EventForm() {
  return (
    <Formik
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
    <form sx={{ height: 1, '&>div': { display: 'flex', justifyContent: 'space-between' } }}>
      {/* Name, 📅, Category */}
      <div>
        <div>
          <Typography variant="subtitle1">Name</Typography>
          <TextField name="name" />
        </div>
        <div>
          <Typography variant="subtitle1">Date</Typography>
          <Field name="name" component={DateRangePicker} />
        </div>
        <div>
          <Typography variant="subtitle1">Category</Typography>
          <TextField name="category" />
        </div>
      </div>

      {/* Imagen, Description */}
      <div>
        <div>
          <Typography variant="subtitle1">Imagen</Typography>
          <Field name="image" type="file" />
        </div>

        <div>
          <Typography variant="subtitle1">Description</Typography>
          <TextField name="name" multiline minRows={10} />
        </div>
      </div>

      {/* Location, Save */}
      <div>
        <div>
          <Typography variant="subtitle1">Location</Typography>
          {/* <Field name="name" component={TextField} /> */}
        </div>

        <Submit sx={{ mt: 'auto' }} />
      </div>
    </form>
  );
}
