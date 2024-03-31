import * as process from 'process'

import { FC } from 'react'

import s from './directions.module.scss'

import { TypographyVariant } from '@/common'
import { DirectionPropsType, Typography } from '@/components'

const directionsData: DirectionPropsType[] = [
  {
    img: {
      alt: 'Helping people',
      loading: 'lazy',
      src: `${process.env.PUBLIC_URL}/assets/images/directions/people/people.jpg`,
      avif: `${process.env.PUBLIC_URL}/assets/images/directions/people/people.avif`,
      webp: `${process.env.PUBLIC_URL}/assets/images/directions/people/people.webp`,
    },
    title: 'Helping people in need',
    text: [
      <p>
        Our charitable foundation regularly provides assistance to&nbsp;low-income families
        in&nbsp;many areas. Among our clients there are people who have suffered from military
        conflicts, loss of&nbsp;property, and emigration.
      </p>,
      <p>
        With our help, you can send money, food and any goods to&nbsp;the war zone.
        We&nbsp;do&nbsp;not adhere to&nbsp;any political views, we&nbsp;simply help everyone who
        needs help.
      </p>,
    ],
    linkTo: '',
  },
  {
    img: {
      alt: 'Helping people',
      loading: 'lazy',
      src: `${process.env.PUBLIC_URL}/assets/images/directions/people/animals.jpg`,
      avif: `${process.env.PUBLIC_URL}/assets/images/directions/people/animals.avif`,
      webp: `${process.env.PUBLIC_URL}/assets/images/directions/people/animals.webp`,
    },
    title: 'Helping homeless animals',
    text: [
      <p>
        Every puppy in&nbsp;the shelter needs a&nbsp;home and kind hands. The best thing you can
        do&nbsp;is&nbsp;to&nbsp;choose a&nbsp;pet from our care and either take it&nbsp;home
        or&nbsp;become its personal curator. Become a&nbsp;member of&nbsp;our big family and gain
        a&nbsp;loyal friend!
      </p>,
      <p>
        You can also help animals by&nbsp;making a&nbsp;donation for their needs. All money, things
        and food will be&nbsp;transferred to&nbsp;shelters.
      </p>,
    ],
    linkTo: '',
  },
]

export const Directions: FC = () => {
  return (
    <section className={'section'}>
      <div className="container">
        <div className={s.header}>
          <div className={s.box}>
            <Typography as={'h2'} variant={TypographyVariant.title}>
              What we do
            </Typography>
            <div className={s.text}>
              <Typography>
                Charity is&nbsp;a&nbsp;true manifestation of&nbsp;kindness and mercy. It&nbsp;has
                an&nbsp;incredible ability to&nbsp;unite us&nbsp;and make our world a&nbsp;better
                place. We&nbsp;often think that in&nbsp;order to&nbsp;help, we&nbsp;need
                to&nbsp;have a&nbsp;lot of&nbsp;time, money or&nbsp;resources.
              </Typography>
              <Typography>
                But in&nbsp;fact, each of&nbsp;us&nbsp;is&nbsp;capable of&nbsp;helping those
                in&nbsp;need, starting with the smallest actions. This could be&nbsp;helping with
                money, food, clothing for those in&nbsp;need, or&nbsp;simply the support and
                attention we&nbsp;can give to&nbsp;those who feel lonely and vulnerable.
              </Typography>
            </div>
          </div>
          <ul className={s.no}>
            <Typography as={'li'} variant={TypographyVariant.slogan}>
              no religion
            </Typography>
            <Typography as={'li'} variant={TypographyVariant.slogan}>
              no nation
            </Typography>
            <Typography as={'li'} variant={TypographyVariant.slogan}>
              no politics
            </Typography>
            <Typography as={'li'} variant={TypographyVariant.slogan}>
              no borders
            </Typography>
          </ul>
        </div>
        <ul className={s.items}></ul>
      </div>
    </section>
  )
}
