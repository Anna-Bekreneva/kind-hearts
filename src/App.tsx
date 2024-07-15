import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomePage, PrivacyPolicePage } from '@/pages'

export function App() {
  return (
    <div className={'wrapper'}>
      <ToastContainer autoClose={50000} position={'bottom-right'} />
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path={'/'} />
          <Route element={<PrivacyPolicePage />} path={'/privacy-policy'} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
