/*
  Entry point of the application
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { AppRoutes } from './AppRoutes'
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary'
import { store } from './services'
import { ToastContainer } from 'react-toastify'
import { config } from './config'
import './styles/index.scss'

const container = document.getElementById('root')

createRoot(container!).render(
  <Provider store={store}>
    <ErrorBoundary>
      <StrictMode>
        <AppRoutes />
        <ToastContainer {...config.toast} />
      </StrictMode>
    </ErrorBoundary>
  </Provider>
)
