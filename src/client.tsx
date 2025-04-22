/// <reference types="vinxi/types/client" />
import { globalCss } from '@mui/material-pigment-css';
import { StartClient } from '@tanstack/react-start';
import { hydrateRoot } from 'react-dom/client';

import { createRouter } from '~/setup';

import '@mui/material-pigment-css/styles.css';

const router = createRouter();

hydrateRoot(document, <StartClient router={router} />);
