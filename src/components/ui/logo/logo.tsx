import { Link } from 'react-router-dom'

import { LogoVariant } from '@/common'
import { APP_ROUTES } from '@/utils'

import s from './logo.module.scss'

type Props = {
  to?: string
  variant?: keyof typeof LogoVariant
}
export const Logo = ({ to = APP_ROUTES.home, variant }: Props) => {
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
}
