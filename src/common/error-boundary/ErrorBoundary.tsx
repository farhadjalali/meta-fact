// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { $t } from '../../i18n'
import './style.scss'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary container">
          <h2>{$t('global-error')}</h2>
          <p>{this.state.error.stack}</p>
        </div>
      )
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}
