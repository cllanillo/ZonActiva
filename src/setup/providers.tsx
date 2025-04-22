import DefaultPropsProvider from '@mui/material/DefaultPropsProvider';
import { PropsWithChildren } from 'react';

export const Providers = (props: PropsWithChildren) => (
  <DefaultPropsProvider
    value={{
      MuiButton: { variant: 'contained' },
      MuiTextField: { size: 'small', variant: 'filled' },
      //   MuiFo
      MuiFilledInput: {
        disableUnderline: true,
        sx: {
          borderRadius: 1,
          //   '&>label.MuiInputLabel-shrink': {  },
          '&>input': { px: 1.5, pt: 2, pb: 1 },
        },
      },
    }}
  >
    {props.children}
  </DefaultPropsProvider>
);
