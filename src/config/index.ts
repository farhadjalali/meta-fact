export const config = {
  locale: localStorage.getItem('locale') || 'en',
  baseURL: process.env.REACT_APP_API_URL,
  notFoundUrl: '/404',

  validation: {
    emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phoneRegex: /^[\d-\\+]{6,}$/,
  },
}
