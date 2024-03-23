import imgMobile from '../../../../assets/images/img/hero/hero-mobile.png'
import img from '../../../../assets/images/img/hero/hero.png'

import s from './hero.module.scss'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
export const Hero = () => {
  return (
    <section className={`${s.section} section`}>
      <div className="container">
        <div className={`${s.wrapper} section__wrapper`}>
          <div className={s.content}>
            <Typography as={'h1'} variant={TypographyVariant.large} className={s.title}>
              Charitable Foundation <br /> «Kind Hearts»
            </Typography>
            <Typography as={'span'} variant={TypographyVariant.subtitle2} className={s.slogan}>
              Kindness is proof of God
            </Typography>
            <Button className={s.button} as={'a'} href={'#'}>
              Want to help
            </Button>
          </div>
          <span className={s.img} style={{ backgroundImage: `url(${img})` }} aria-hidden></span>
          <span
            className={`${s.img} ${s.imgMobile}`}
            style={{ backgroundImage: `url(${imgMobile})` }}
            aria-hidden
          ></span>
        </div>
      </div>
    </section>
  )
}
