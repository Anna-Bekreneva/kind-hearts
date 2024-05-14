import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { App } from '@/App'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.min.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <App />
              <ToastContainer autoClose={50000} position={'bottom-right'} />
            </>
          }
          path={'/'}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
