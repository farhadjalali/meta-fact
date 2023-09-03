// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { $t } from '../../i18n'
import './ErrorBoundary.scss'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  //componentDidCatch(error, errorInfo) {
  // You can also log the error to an error reporting service
  // logErrorToMyService(error, errorInfo)
  //}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary">
          <p>{$t.GLOBAL_ERROR}</p>
          <hr />

          <div className="details">
            <h2>More info:</h2>
            {this.state.error.stack}
          </div>
        </div>
      )
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}
