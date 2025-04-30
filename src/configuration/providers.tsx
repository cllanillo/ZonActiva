import DefaultPropsProvider from '@mui/material/DefaultPropsProvider';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LicenseInfo } from '@mui/x-license';
import type { PropsWithChildren } from 'react';

LicenseInfo.setLicenseKey('954aebe364589d218a24faff1674daccTz05MDkxOCxFPTE3NDc4Mzg1OTMwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');

export const Providers = (props: PropsWithChildren) => (
  <>
    <DefaultPropsProvider
      value={{
        MuiButton: { variant: 'outlined' },
        MuiFilledInput: { disableUnderline: true },
        MuiPaper: { elevation: 0 },
        MuiTextField: { size: 'small', variant: 'filled' },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>{props.children}</LocalizationProvider>
    </DefaultPropsProvider>
  </>
);
