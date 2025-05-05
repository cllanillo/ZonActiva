import { RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { createRouter } from '⚙️';

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={createRouter()} />);
}
