import styles from 'styles/TabContainer.module.css'

type Props = {
  children: React.ReactNode
}

const TabContainer: React.FC<Props> = ({ children }) => {
  return <div className={styles.PageContainer}></div>
}

export default TabContainer
