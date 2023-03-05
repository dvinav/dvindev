import { useRouter } from 'next/router'
import styles from 'styles/AppContainer.module.css'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

const AppContainer: React.FC<Props> = ({ children }) => {
  const { locale } = useRouter()

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={locale}
        className={
          'w-full lg:border lg:border-slate-400 lg:py-10 lg:px-24 select-none lg:block ' +
          styles.AppContainer
        }
        dir={locale == 'fa' ? 'rtl' : 'ltr'}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default AppContainer
