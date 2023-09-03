import { config } from '../config'
import { en } from './translations/en'
import { nl } from './translations/nl'

type TextKeys = keyof typeof en
export type I18nTranslation = { [key in TextKeys]: string }

export const $t = (key: TextKeys): string => {
  switch (config.locale) {
    case 'nl':
      return nl[key] || en[key] || key

    default:
      return en[key] || key
  }
}
