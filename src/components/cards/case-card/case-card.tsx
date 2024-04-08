import { FC } from 'react'

import { TypographyVariant } from '@/common'
import { Picture, PicturePropsType, Typography } from '@/components'

import s from './case-card.module.scss'

type CasePropsType = {
  className?: string
  title: string
} & Omit<PicturePropsType, 'className'>
export const CaseCard: FC<CasePropsType> = ({ className, title, ...rest }) => {
  return (
    <article className={`${s.card} ${className}`}>
      <Picture className={s.img} {...rest} />
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.subtitle1}>
        {title}
      </Typography>
    </article>
  )
}
