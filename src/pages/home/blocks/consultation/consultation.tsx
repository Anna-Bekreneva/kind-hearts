import { memo } from 'react'

import { TypographyVariant } from '@/common'
import { Form, Typography } from '@/components'

import s from './consultation.module.scss'

export const Consultation = memo(() => {
  return (
    <section className={'section'}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.descr}>
            <Typography as={'h2'} variant={TypographyVariant.title}>
              Get a personal consultation
            </Typography>
            <div className={s.text}>
              <Typography variant={TypographyVariant.subtitle2}>
                Fill out the form and we&nbsp;will contact you shortly.
              </Typography>
              <Typography variant={TypographyVariant.subtitle2}>
                Or write to us on{' '}
                <a className={s.link} href={'#'} rel={'noreferrer'} target={'_blank'}>
                  WhatsApp
                </a>
              </Typography>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
})
