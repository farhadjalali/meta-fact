import { ToastOptions } from 'react-toastify'

export const config = {
  // Locale can be read from localStorage, current user profile or ...
  locale: localStorage.getItem('locale') ?? 'en',
  notFoundUrl: '/404',

  // toastify options
  toast: {
    position: 'bottom-left',
    hideProgressBar: true,
    theme: 'dark',
  } as ToastOptions,

  validation: {
    emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phoneRegex: /^[\d-\\+]{6,}$/,
    ageRegex: /^\d\d?$/,
  },
}
