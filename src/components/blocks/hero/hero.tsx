import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'

import s from './hero.module.scss'

type Props = {
  title?: string
  slogan?: string
  isButton?: boolean
}

export const Hero = ({title, isButton = false, slogan}: Props) => {
  return (
    <section className={s.section}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.content}>
            <Typography as={'h1'} className={s.title} variant={TypographyVariant.large}>
              {title ?? 'Charitable Foundation «Kind\u00A0Hearts»'}
            </Typography>
            {slogan && <Typography as={'span'} className={s.slogan} variant={TypographyVariant.subtitle2}>
              {slogan}
            </Typography>}
            { isButton && <Button as={'a'} className={s.button} href={'#'}>
                Want to help
            </Button> }
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
