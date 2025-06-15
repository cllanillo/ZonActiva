import { Typography } from '@mui/material';
import { Formik } from 'formik';
import { useMemo } from 'react';
import * as Yup from 'yup';
import { type EventFormDto, useCreateEvent } from '~/api/events';
import { FormikDateRange, FormikFile, FormikMapPoint, FormikSubmit, FormikText } from '🪟/field';

export default function EventForm() {
  const yupSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string()
          .max(25, ({ max }) => `Name must be less than ${max} charaters`)
          .required('Name is required'),
        date: Yup.array().required('Date is required'),
        point: Yup.object().required('Select a location on the map'),
      }),
    [],
  );
  const createEvent = useCreateEvent();

  return <Formik validationSchema={yupSchema} initialValues={{} as EventFormDto} onSubmit={(newEvent) => createEvent.mutateAsync(newEvent)} children={<InnerForm />} />;
}

function InnerForm() {
  return (
    <form
      sx={{
        height: 1,
        width: 1,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        '&>div': {
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          '&:last-of-type': { flexGrow: 1, alignItems: 'end', '&>div': { height: 1 } },
          '&>div': {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
          },
        },
        '& #point': { minHeight: '25svh' },
      }}
    >
      {/* Name, 📅, Category */}
      <div sx={{ mt: '54px', ml: '116px' }}>
        <div>
          <Typography variant="subtitle1">Icon</Typography>
          <FormikFile name="icon" />
        </div>
        <div>
          <Typography variant="subtitle1">Name</Typography>
          <FormikText name="name" fullWidth />
        </div>
        <div>
          <Typography variant="subtitle1">Date</Typography>
          <FormikDateRange name="date" slotProps={{ textField: { fullWidth: true } }} />
        </div>
        {/* <div>
          <Typography variant="subtitle1">Category</Typography>
          <FormikText name="category" fullWidth />
        </div> */}
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
        <div id="point">
          <Typography variant="subtitle1">Location</Typography>
          <FormikMapPoint name="point" />
        </div>

        <FormikSubmit sx={{ mt: 'auto' }} />
      </div>
    </form>
  );
}
