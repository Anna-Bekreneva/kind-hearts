import { FC, memo } from 'react'

import { Link } from 'react-router-dom'

import horizontal from '../../../assets/images/img/logo/logo-horizontal.svg'
import vertical from '../../../assets/images/img/logo/logo-vertical.svg'

import s from './logo.module.scss'

import { LogoVariant } from '@/common'

type Props = {
  to?: string
  variant?: keyof typeof LogoVariant
}
export const Logo: FC<Props> = memo(({ to = '/', variant }) => {
  const linkClassName = `${s.logo} ${variant ? s[String(variant)] : s.standard}`

  return (
    <Link className={linkClassName} to={to}>
      {variant ? (
        <img
          className={s.img}
          src={`${variant === 'vertical' ? vertical : horizontal}`}
          alt="logo"
        />
      ) : (
        <picture>
          <source media="(max-width: 560px)" srcSet={horizontal} />
          <img className={s.img} src={vertical} alt="logo" />
        </picture>
      )}
    </Link>
  )
})
