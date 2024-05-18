import { memo } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './state-supports.module.scss'

const supports: SupportCardProps[] = [
  { subtitle: 'donate', title: '$ 100' },
  { subtitle: 'tax free', title: '- $ 100' },
]

export const StateSupports = () => {
  return (
    <section className={'section'} id={'state-support'}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.illustration}>
            <div className={s.cards}>
              {supports.map((item, index) => (
                <SupportCard key={index} {...item} />
              ))}
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

type SupportCardProps = {
  subtitle: string
  title: string
}

const SupportCard = memo(({ subtitle, title }: SupportCardProps) => {
  return (
    <div className={s.card}>
      <Typography as={'span'} variant={TypographyVariant.large}>
        {title}
      </Typography>
      <Typography as={'span'} className={s.subtext} variant={TypographyVariant.title}>
        {subtitle}
      </Typography>
    </div>
  )
})
