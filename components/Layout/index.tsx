import { motion, MotionConfig } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <MotionConfig>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0, ease: [0.16, 0.43, 0.02, 0.99] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  )
}
