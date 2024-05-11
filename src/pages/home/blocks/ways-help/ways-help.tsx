import { memo } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './ways-help.module.scss'

export const WaysHelp = memo(() => {
  return (
    <section className={'section'} id={'ways-help'}>
      <div className={'container'}>
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
                <Typography as={'a'} className={s.link} href={'tel:+17186350030'}>
                  +1&nbsp;(718) 6&nbsp;350&nbsp;030
                </Typography>{' '}
                or&nbsp;leave a request on the website.
              </Typography>
            </div>
          </div>
          <div aria-hidden className={s.pictureWrapper}>
            <div
              className={s.picture}
              style={{
                backgroundImage: 'url(/assets/images/waysHelp.jpg)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
})
