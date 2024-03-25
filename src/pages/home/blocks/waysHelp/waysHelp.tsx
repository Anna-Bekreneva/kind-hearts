import img from '../../../../assets/images/img/waysHelp.jpg'

import s from './waysHelp.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
export const WaysHelp = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.content}>
            <Typography as={'h2'} variant={TypographyVariant.title}>
              Ways to help
            </Typography>
            <div className={s.text}>
              <Typography>
                We accept any donations of any size: you can bring donations of substances, food,
                things (from real estate and transportation to children’s toys).
              </Typography>
            </div>
            <div className={s.text}>
              <Typography variant={TypographyVariant.subtitle1}>
                To help the fund, contact our manager at{' '}
                <Typography as={'a'} href={'tel:+17186350030'}>
                  +1 (718) 6 350 030
                </Typography>{' '}
                or leave a request on the website.
              </Typography>
            </div>
          </div>
          <div className={s.pictureWrapper} aria-hidden>
            <div className={s.picture} style={{ backgroundImage: `url(${img})` }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
