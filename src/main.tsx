import './styles/index.scss'

import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { App } from '@/App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
