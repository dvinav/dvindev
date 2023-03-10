import fa from 'locales/fa.json'
import en from 'locales/en.json'

const messages = {
  fa,
  en
}

type Messages = keyof typeof messages

export default function GetMessages(locale: string) {
  return messages[locale as Messages]
}
