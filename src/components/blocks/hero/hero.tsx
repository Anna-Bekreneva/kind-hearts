import { Link } from 'react-scroll'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'

import s from './hero.module.scss'

type Props = {
  isButton?: boolean
  slogan?: string
  title?: string
}

export const Hero = ({ isButton = false, slogan, title }: Props) => {
  return (
    <section className={s.section}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.content}>
            <Typography as={'h1'} className={s.title} variant={TypographyVariant.large}>
              {title ?? 'Charitable Foundation «Kind\u00A0Hearts»'}
            </Typography>
            {slogan && (
              <Typography as={'span'} className={s.slogan} variant={TypographyVariant.subtitle2}>
                {slogan}
              </Typography>
            )}
            {isButton && (
              <Button
                as={Link}
                className={s.button}
                href={'#'}
                offset={-80}
                smooth
                to={'consultation'}
              >
                Want to help
              </Button>
            )}
          </div>
          <span
            aria-hidden
            className={s.img}
            style={{
              backgroundImage: 'url(/assets/images/hero/hero.png)',
            }}
          />
          <span
            aria-hidden
            className={`${s.img} ${s.imgMobile}`}
            style={{
              backgroundImage: 'url(/assets/images/hero/hero-mobile.png)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
