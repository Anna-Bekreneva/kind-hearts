import { FC, memo } from 'react'
import { Link } from 'react-router-dom'

import { LogoVariant } from '@/common'

import s from './logo.module.scss'

type Props = {
  to?: string
  variant?: keyof typeof LogoVariant
}
export const Logo: FC<Props> = memo(({ to = '/', variant }) => {
  const linkClassName = `${s.logo} ${variant ? s[String(variant)] : s.standard}`

  const logoHorizontal = '/assets/images/logo/logo-horizontal.svg'
  const logoVertical = '/assets/images/logo/logo-vertical.svg'

  return (
    <Link className={linkClassName} to={to}>
      {variant ? (
        <img
          alt={'logo'}
          className={s.img}
          src={`${variant === 'vertical' ? logoVertical : logoHorizontal}`}
        />
      ) : (
        <picture>
          <source media={'(max-width: 560px)'} srcSet={logoHorizontal} />
          <img alt={'logo'} className={s.img} src={logoVertical} />
        </picture>
      )}
    </Link>
  )
})
