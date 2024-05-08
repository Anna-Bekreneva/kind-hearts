import { memo, useEffect, useState } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './advantages.module.scss'

const advantagesData: AdvantageType[] = [
  {
    number: 5000,
    text: 'raised in 2024',
    time: 0.9,
    title: `$`,
  },
  {
    number: 24,
    text: 'people received help thanks to you',
    time: 20,
  },
  {
    number: 13,
    text: 'months of saving animals together',
    time: 10,
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
                  <Advantage
                    number={advantage.number}
                    text={advantage.text}
                    time={advantage.time}
                    title={advantage.title}
                  />
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
  number: number
  text: string
  time: number
  title?: string
}
const Advantage = memo(({ number, text, time, title }: AdvantageType) => {
  const [currVal, setCurrVal] = useState(0)

  useEffect(() => {
    if (currVal === number) {
      return
    }
    setTimeout(setCurrVal, time, currVal + 1)
  }, [currVal])

  return (
    <>
      <Typography as={'span'} className={s.subtitle} variant={TypographyVariant.title}>
        {title && title}
        {currVal}
      </Typography>
      <Typography as={'span'} className={s.subtext}>
        {text}
      </Typography>
    </>
  )
})
