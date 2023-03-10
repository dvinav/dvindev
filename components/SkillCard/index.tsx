import { Card, CardContent, CardMedia, Typography } from '@mui/material'

type Props = {
  file: string
  name: string
  invert?: boolean
}

export default function SkillCard({ file, name, invert }: Props) {
  return (
    <Card variant="outlined" dir="ltr" className="flex flex-col lg:flex-row items-center h-28 p-4">
      <CardMedia component="img" className={`${invert ? 'dark:invert' : ''} w-10 h-10 lg:w-16 lg:h-16`} image={file} alt={name} />
      <Typography className="lg:text-xl lg:ml-4 lg:mt-0 mt-4">{name}</Typography>
    </Card>
  )
}
