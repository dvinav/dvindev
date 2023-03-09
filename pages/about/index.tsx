import SkillCard from 'components/SkillCard'
import Head from 'next/head'
import { FormattedMessage } from 'react-intl'

export default function Skills() {
  return (
    <>
      <Head>
        <title>Dvin | About</title>
      </Head>
      <div className="h-full w-auto flex items-center lg:gap-16 ">
        <div className="flex flex-col lg:flex-row items-center lg:gap-16 ">
          <div className="basis-2/5 ">
            <p className="rtl:lg:text-2xl traffic rtl:font-thin text-sm lg:text-lg text-justify dark:text-slate-200 text-slate-700">
              <FormattedMessage id="about.main" />
            </p>
          </div>
          <div className="basis-3/5 grid grid-cols-3 gap-y-2 gap-x-2 lg:gap-4 notyekan mt-10">
            <SkillCard file="/svg/javascript.svg" name="JavaScript" />
            <SkillCard file="/svg/typescript.svg" name="TypeScript" />
            <SkillCard file="/svg/node.svg" name="Node.JS" />
            <SkillCard file="/svg/react.svg" name="React" />
            <SkillCard file="/svg/mongo.svg" name="MongoDB" />
            <SkillCard file="/svg/nextjs.svg" name="Next.JS" />
          </div>
        </div>
      </div>
    </>
  )
}
