import { FC, ReactNode } from 'react'

import { Link } from 'react-router-dom'

import s from './direction.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Picture, PicturePropsType, Typography } from '@/components'

export type DirectionPropsType = {
  img: PicturePropsType
  title: string
  text: ReactNode[]
  linkTo: string
}
export const Direction: FC<DirectionPropsType> = ({ img, title, text, linkTo }) => {
  return (
    <article className={s.card}>
      <Picture {...img} className={s.img} />
      <Typography className={s.title} as={'h3'} variant={TypographyVariant.subtitle1}>
        {title}
      </Typography>

      <div className={s.text}>
        {text.map((element, index) => (
          <Typography key={index}> {element} </Typography>
        ))}
      </div>

      <Button className={s.link} as={Link} to={linkTo}>
        Want to help
      </Button>
    </article>
  )
}
