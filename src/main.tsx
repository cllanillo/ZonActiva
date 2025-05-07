import { RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { createRouter } from '⚙️';

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) ReactDOM.createRoot(rootElement).render(<RouterProvider router={createRouter()} />);
