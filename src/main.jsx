import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { RouterProvider, } from "react-router-dom";
import router from './Routes/router.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';

import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto' >
    <React.StrictMode>
      <AuthProviders>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProviders>
    </React.StrictMode>,
  </div>
)
