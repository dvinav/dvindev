import { WhatsApp, Telegram, PhoneOutlined, EmailOutlined } from '@mui/icons-material'

const IconProps = {
  className:
    'transition-colors rtl:mt-0.5 dark:lg:hover:text-slate-200 lg:hover:text-slate-700 text-slate-400 active:text-slate-700 dark:active:text-slate-200 cursor-pointer'
}

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      <WhatsApp {...IconProps} onClick={() => window.open('https://api.whatsapp.com/send?phone=989020092004')} />
      <Telegram {...IconProps} onClick={() => window.open('https://t.me/dvinav')} />
      <PhoneOutlined {...IconProps} onClick={() => window.open('tel:+989020092004')} />
      <EmailOutlined {...IconProps} onClick={() => window.open('mailto:dvin.avanesian@outlook.com')} />
    </div>
  )
}
