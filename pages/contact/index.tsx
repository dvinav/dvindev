import { Grid, OutlinedTextFieldProps, Button, TextField } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { SendOutlined } from '@mui/icons-material'
import Head from 'next/head'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'

import Text from 'components/Text'
import Layout from 'components/Layout'

import { Yekan } from 'util/fonts'
import { useRouter } from 'next/router'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
})

const cacheLtr = createCache({
  key: 'muiltr'
})

const TFProps: OutlinedTextFieldProps = {
  variant: 'outlined',
  fullWidth: true,
  InputLabelProps: { style: Yekan.style }
}

export default function Contact() {
  const { locale } = useRouter()

  return (
    <Layout>
      <Head>
        <title>Dvin | Contact</title>
      </Head>
      <Text type="h2" className="mt-2 mb-10 self-start">
        <FormattedMessage id="contact.title" />
      </Text>
      <CacheProvider value={locale == 'fa' ? cacheRtl : cacheLtr}>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={6}>
            <TextField {...TFProps} label={<FormattedMessage id="contact.name" />} />
          </Grid>
          <Grid item xs={6}>
            <TextField {...TFProps} label={<FormattedMessage id="contact.email" />} />
          </Grid>
          <Grid item xs={12}>
            <TextField {...TFProps} label={<FormattedMessage id="contact.subject" />} />
          </Grid>
          <Grid item xs={9}>
            <TextField {...TFProps} multiline rows={4} label={<FormattedMessage id="contact.message" />} />
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" className="w-full h-full">
              <SendOutlined />
            </Button>
          </Grid>
        </Grid>
      </CacheProvider>
    </Layout>
  )
}
