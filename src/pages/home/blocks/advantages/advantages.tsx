import { memo } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './advantages.module.scss'

const advantagesData: AdvantageType[] = [
  {
    text: 'raised in 2024',
    title: `$5000`,
  },
  {
    text: 'people received help thanks to you',
    title: '24',
  },
  {
    text: 'months of saving animals together',
    title: '13',
  },
]

export const Advantages = memo(() => {
  return (
    <section>
      <Typography as={'h2'} className={'sr-only'}>
        Our advantages
      </Typography>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <div className={s.box}>
            <div className={s.text}>
              <Typography variant={TypographyVariant.subtitle2}>
                The Charitable Foundation «Kind Hearts» was created to provide assistance to people
                in&nbsp;need and homeless animals.
              </Typography>
            </div>
            <ul className={s.items}>
              {advantagesData.map((advantage, index) => (
                <li className={s.item} key={index}>
                  <Advantage text={advantage.text} title={advantage.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
})

type AdvantageType = {
  text: string
  title: string
}
const Advantage = memo(({ text, title }: AdvantageType) => {
  return (
    <>
      <Typography as={'span'} className={s.subtitle} variant={TypographyVariant.title}>
        {title}
      </Typography>
      <Typography as={'span'} className={s.subtext}>
        {text}
      </Typography>
    </>
  )
})
