import process from 'process'

import s from './ways-help.module.scss'

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
                We&nbsp;accept any donations of&nbsp;any size: you can bring donations
                of&nbsp;substances, food, things (from real estate and transportation
                to&nbsp;children’s&nbsp;toys).
              </Typography>
            </div>
            <div className={s.text}>
              <Typography variant={TypographyVariant.subtitle1}>
                To help the fund, contact our manager at{' '}
                <Typography as={'a'} href={'tel:+17186350030'}>
                  +1 (718) 6 350 030
                </Typography>{' '}
                or&nbsp;leave a request on the website.
              </Typography>
            </div>
          </div>
          <div className={s.pictureWrapper} aria-hidden>
            <div
              className={s.picture}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/waysHelp.jpg)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
