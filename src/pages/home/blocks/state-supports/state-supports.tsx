import s from './state-supports.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

export const StateSupports = () => {
  return (
    <section className={'section'}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.illustration}>
            <div className={s.card}>
              <Typography as={'span'} variant={TypographyVariant.large}>
                $ 100
              </Typography>
              <Typography className={s.subtext} as={'span'} variant={TypographyVariant.title}>
                donate
              </Typography>
            </div>
            <div className={s.card}>
              <Typography as={'span'} variant={TypographyVariant.large}>
                - $ 100
              </Typography>
              <Typography className={s.subtext} as={'span'} variant={TypographyVariant.title}>
                tax free
              </Typography>
            </div>
          </div>
          <div className={s.content}>
            <Typography as={'h2'} variant={TypographyVariant.title}>
              How the state supports philanthropists
            </Typography>
            <div className={s.text}>
              <Typography variant={TypographyVariant.subtitle2}>
                Philanthropists can receive a tax deduction on the amount of donations of 30% or
                more.
              </Typography>
              <Typography variant={TypographyVariant.subtitle2}>
                More information can be found at irs.gov.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
