import { FC, ReactNode, memo } from 'react'
import { Link } from 'react-router-dom'

import { TypographyVariant } from '@/common'
import { Button, Picture, Typography } from '@/components'

import s from './direction-card.module.scss'

export type DirectionPropsType = {
  img: { alt: string; basePath: string }
  linkTo: string
  text: ReactNode[]
  title: string
}
export const DirectionCard = memo(({ img, linkTo, text, title }: DirectionPropsType) => {
  return (
    <article className={s.card}>
      <div className={s.imgWrapper}>
        <Picture
          alt={img.alt}
          avif={`${img.basePath}.avif 1x, ${img.basePath}@2x.avif 2x`}
          className={s.img}
          height={330}
          loading={'lazy'}
          src={`${img.basePath}.jpg`}
          srcSet={`${img.basePath}@2x.jpg`}
          webp={`${img.basePath}.webp 1x, ${img.basePath}@2x.webp 2x`}
          width={530}
        />
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
})
