/*
  Description: Entry point of the application
  Update frequency: Rarely, when a high level configuration is changed
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { AppRoutes } from './AppRoutes'
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary'
import { configureStore } from './services/configureStore'
import './styles/index.scss'

const store = configureStore()
const container = document.getElementById('root')

createRoot(container!).render(
  <Provider store={store}>
    <ErrorBoundary>
      <StrictMode>
        <AppRoutes />
      </StrictMode>
    </ErrorBoundary>
  </Provider>
)
