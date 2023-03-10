import Layout from 'components/Layout'
import Text from 'components/Text'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import { Montserrat, Yekan } from 'util/fonts'

export default function Home() {
  const { locale } = useRouter()
  return (
    <Layout>
      <Head>
        <title>Dvin | Home</title>
      </Head>
      <Text type="h1" className={`${locale == 'fa' ? Yekan.className : Montserrat.className} text-center`}>
        <FormattedMessage id="home.hello" />
      </Text>
      <Text type="h2" className={`${locale == 'fa' ? Yekan.className : Montserrat.className} mt-10 text-center`}>
        <FormattedMessage id="home.intro" />
      </Text>
    </Layout>
  )
}
