import * as process from 'process'

import { FC, memo } from 'react'

import { Link } from 'react-router-dom'

import s from './logo.module.scss'

import { LogoVariant } from '@/common'

type Props = {
  to?: string
  variant?: keyof typeof LogoVariant
}
export const Logo: FC<Props> = memo(({ to = '/', variant }) => {
  const linkClassName = `${s.logo} ${variant ? s[String(variant)] : s.standard}`

  const logoHorizontal = `${process.env.PUBLIC_URL}/assets/images/logo/logo-horizontal.svg`
  const logoVertical = `${process.env.PUBLIC_URL}/assets/images/logo/logo-vertical.svg`

  return (
    <Link className={linkClassName} to={to}>
      {variant ? (
        <img
          className={s.img}
          src={`${variant === 'vertical' ? logoVertical : logoHorizontal}`}
          alt="logo"
        />
      ) : (
        <picture>
          <source media="(max-width: 560px)" srcSet={logoHorizontal} />
          <img className={s.img} src={logoVertical} alt="logo" />
        </picture>
      )}
    </Link>
  )
})
