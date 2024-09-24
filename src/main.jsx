import React from 'react';
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import router from './Route/Router'
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Provider/AuthProvider';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>

    {/* <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider> */}

  </React.StrictMode>
)
