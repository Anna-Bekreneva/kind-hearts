import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { TypographyVariant } from '@/common'
import { Button, Picture, PicturePropsType, Typography } from '@/components'

import s from './direction-card.module.scss'

export type DirectionPropsType = {
  img: PicturePropsType
  linkTo: string
  text: ReactNode[]
  title: string
}
export const DirectionCard: FC<DirectionPropsType> = ({ img, linkTo, text, title }) => {
  return (
    <article className={s.card}>
      <div className={s.imgWrapper}>
        <Picture {...img} className={s.img} />
      </div>
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.subtitle1}>
        {title}
      </Typography>

      <div className={s.text}>
        {text.map((element, index) => (
          <Typography key={index}> {element} </Typography>
        ))}
      </div>

      <Button as={Link} className={s.link} to={linkTo}>
        Want to help
      </Button>
    </article>
  )
}
