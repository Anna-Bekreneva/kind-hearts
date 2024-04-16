import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { App } from '@/App'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={'/'} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
