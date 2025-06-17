import { Grid, Typography } from '@mui/material';
import { Formik, type FormikProps } from 'formik';
import { useMemo, useRef } from 'react';
import * as Yup from 'yup';
import { type EventFormDto, useCreateEvent } from '~/api/events';
import { FormikDateRange, FormikFile, FormikMapPoint, FormikSubmit, FormikText } from '🪟/field';

export default function EventForm() {
  const formiRef = useRef({} as FormikProps<EventFormDto>);
  console.log(`🚀 ~ EventForm.formiRef:`, formiRef);

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

  return (
    <Formik
      innerRef={formiRef}
      validationSchema={yupSchema}
      initialValues={{} as EventFormDto}
      onSubmit={(newEvent) => {
        console.log(`🚀 ~ onSubmit:`, newEvent);
        createEvent.mutateAsync(newEvent);
      }}
      children={<InnerForm />}
    />
  );
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
        overflow: 'auto',
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
      <div sx={{ mt: '54px', ml: '46px' }}>
        <div sx={{ flexGrow: '0!important', '&>button': { height: 64, width: 64 } }}>
          <FormikFile name="icon" sx={{ height: 64, width: 64 }} />
        </div>
        <div>
          <Typography variant="subtitle1">Name</Typography>
          <FormikText name="name" fullWidth />
        </div>
        <div>
          <Typography variant="subtitle1">Date</Typography>
          <FormikDateRange name="date" slotProps={{ textField: { fullWidth: true } }} />
        </div>
      </div>

      {/* Imagen, Description */}
      <Grid container spacing={2} sx={{ overflow: { xs: 'unset', md: 'auto' } }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ '&>button': { width: '100%', minHeight: 200, maxWidth: 'unset' } }}>
          <Typography variant="subtitle1">Imagen</Typography>
          <FormikFile name="image" />

          <Typography variant="subtitle1">Description</Typography>
          <FormikText
            name="description"
            multiline
            minRows={5}
            fullWidth
            sx={{
              flexGrow: 1,
              overflow: 'auto',
              '&>.MuiInputBase-root': { flexGrow: 1, alignItems: 'start', '&>.MuiInputBase-input': { flexGrow: 1 } },
            }}
          />
        </Grid>

        {/* Location, Save */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ alignItems: 'end', '&>button': {} }}>
          <Typography variant="subtitle1" sx={{ width: 1 }}>
            Location
          </Typography>
          <FormikMapPoint name="point" />

          <FormikSubmit sx={{ mt: 'auto', width: 0.3, position: 'absolute', bottom: 0, right: 0, mr: 2, mb: 2 }} />
        </Grid>
      </Grid>
    </form>
  );
}
