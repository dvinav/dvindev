import { Container, Grid } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { GridProps } from '@mui/material'

import Text from 'components/Text'
import SkillCard from 'components/SkillCard'
import Layout from 'components/Layout'
import Head from 'next/head'

const IProps: GridProps = {
  item: true,
  xs: 1
}

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Dvin | About</title>
      </Head>
      <Container disableGutters className="w-auto flex flex-col lg:flex-row items-center lg:gap-16">
        <Text type="p" className="basis-2/5 mb-10 lg:mb-0">
          <FormattedMessage id="about.main" />
        </Text>
        <Grid container spacing={2} columns={3} className="noyekan basis-3/5">
          <Grid {...IProps}>
            <SkillCard file="/svg/javascript.svg" name="JavaScript" />
          </Grid>
          <Grid {...IProps}>
            <SkillCard file="/svg/typescript.svg" name="TypeScript" />
          </Grid>
          <Grid {...IProps}>
            <SkillCard file="/svg/node.svg" name="Node.JS" />
          </Grid>
          <Grid {...IProps}>
            <SkillCard file="/svg/react.svg" name="React" />
          </Grid>
          <Grid {...IProps}>
            <SkillCard file="/svg/mongo.svg" name="MongoDB" />
          </Grid>
          <Grid item xs={1}>
            <SkillCard file="/svg/nextjs.svg" name="Next.JS" invert />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
