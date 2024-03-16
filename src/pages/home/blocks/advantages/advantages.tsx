import { FC } from 'react'

import s from './advantages.module.scss'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

const advantagesData: AdvantageType[] = [
  {
    title: '$ 5 000 ',
    text: 'raised in 2024',
  },
  {
    title: '24',
    text: 'people received help thanks to you',
  },
  {
    title: '13',
    text: 'months of saving animals together',
  },
]

export const Advantages: FC = () => {
  return (
    <section className={'section'}>
      <Typography as={'h2'} className="sr-only">
        Our advantages
      </Typography>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.box}>
            <div className={s.text}>
              <Typography variant={TypographyVariant.subtitle2}>
                The Charitable Foundation «Kind Hearts» was created to provide assistance to people
                in need and homeless animals.
              </Typography>
            </div>
            <ul className={s.items}>
              {advantagesData.map((advantage, index) => (
                <li key={index} className={s.item}>
                  <Advantage title={advantage.title} text={advantage.text} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

type AdvantageType = {
  title: string
  text: string
}
const Advantage: FC<AdvantageType> = ({ title, text }) => {
  return (
    <>
      <Typography variant={TypographyVariant.title} as={'span'} className={s.subtitle}>
        {title}
      </Typography>
      <Typography as={'span'} className={s.subtext}>
        {text}
      </Typography>
    </>
  )
}
