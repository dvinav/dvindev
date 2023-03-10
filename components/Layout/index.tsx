import { motion, MotionConfig } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <MotionConfig transition={{ duration: 0.1, ease: 'easeOut', delay: 0 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {children}
      </motion.div>
    </MotionConfig>
  )
}
