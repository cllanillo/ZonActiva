import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from '@mui/material';
import DefaultPropsProvider from '@mui/material/DefaultPropsProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { LicenseInfo } from '@mui/x-license';
import type { PropsWithChildren } from 'react';
import { theme } from '⚙️';

LicenseInfo.setLicenseKey('954aebe364589d218a24faff1674daccTz05MDkxOCxFPTE3NDc4Mzg1OTMwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');

export const Providers = (props: PropsWithChildren) => (
  <Auth0Provider domain="dev-golaqzz6py118e6i.us.auth0.com" clientId="5qwv0vgKLD35wNn4nD892yThWkwA8UQ0" authorizationParams={{ redirect_uri: globalThis?.origin }}>
    <ThemeProvider theme={theme}>
      <DefaultPropsProvider
        value={Object.entries(theme.components ?? {}).reduce(
          (acc, [key, item]) => {
            acc[key] = item.defaultProps;
            return acc;
          },
          {} as Record<string, any>,
        )}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>{props.children}</LocalizationProvider>
      </DefaultPropsProvider>
    </ThemeProvider>
  </Auth0Provider>
);
