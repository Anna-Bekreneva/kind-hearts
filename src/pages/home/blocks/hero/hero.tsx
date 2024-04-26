import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'

import s from './hero.module.scss'
export const Hero = () => {
  return (
    <section className={s.section}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.content}>
            <Typography as={'h1'} className={s.title} variant={TypographyVariant.large}>
              Charitable Foundation <br /> «Kind Hearts»
            </Typography>
            <Typography as={'span'} className={s.slogan} variant={TypographyVariant.subtitle2}>
              Kindness is proof of&nbsp;God
            </Typography>
            <Button as={'a'} className={s.button} href={'#'}>
              Want to help
            </Button>
          </div>
          <span
            aria-hidden
            className={s.img}
            style={{
              backgroundImage: 'url(/assets/images/hero/hero.png)',
            }}
          ></span>
          <span
            aria-hidden
            className={`${s.img} ${s.imgMobile}`}
            style={{
              backgroundImage: 'url(/assets/images/hero/hero-mobile.png)',
            }}
          ></span>
        </div>
      </div>
    </section>
  )
}
