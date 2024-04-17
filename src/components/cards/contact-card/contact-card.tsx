import { ComponentPropsWithoutRef, FC } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './contact-card.module.scss'

export type ContactCardProps = {
  text: string
  title: string
} & ComponentPropsWithoutRef<'article'>
export const ContactCard: FC<ContactCardProps> = ({ text, title, ...rest }) => {
  return (
    <article className={s.card} {...rest}>
      <Typography as={'h3'} variant={TypographyVariant.subtitle1}>
        {title}
      </Typography>
      <Typography>{text}</Typography>
    </article>
  )
}
