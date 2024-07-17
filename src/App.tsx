import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomePage, PrivacyPolicePage } from '@/pages'
import {APP_ROUTES} from "@/utils";

export function App() {
  return (
    <div className={'wrapper'}>
      <ToastContainer autoClose={50000} position={'bottom-right'} />
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path={APP_ROUTES.home} />
          <Route element={<PrivacyPolicePage />} path={APP_ROUTES.privacyPolicy} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
