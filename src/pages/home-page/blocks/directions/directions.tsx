import { TypographyVariant } from '@/common'
import { DirectionCard, DirectionPropsType, Typography } from '@/components'

import s from './directions.module.scss'

const directionsData: DirectionPropsType[] = [
  {
    img: {
      alt: 'Helping people',
      basePath: '/assets/images/directions/people/people',
    },
    linkTo: '',
    text: (
      <>
        <p>
          Our charitable foundation regularly provides assistance to&nbsp;low-income families
          in&nbsp;many areas. Among our clients there are people who have suffered from military
          conflicts, loss of&nbsp;property, and emigration.
        </p>
        <p>
          With our help, you can send money, food and any goods to&nbsp;the war zone.
          We&nbsp;do&nbsp;not adhere to&nbsp;any political views, we&nbsp;simply help everyone who
          needs help.
        </p>
      </>
    ),
    title: 'Helping people in need',
  },
  {
    img: {
      alt: 'Helping people',
      basePath: '/assets/images/directions/animals/animals',
    },
    linkTo: '',
    text: (
      <>
        <p>
          Every puppy in&nbsp;the shelter needs a&nbsp;home and kind hands. The best thing you can
          do&nbsp;is&nbsp;to&nbsp;choose a&nbsp;pet from our care and either take it&nbsp;home
          or&nbsp;become its personal curator. Become a&nbsp;member of&nbsp;our big family and gain
          a&nbsp;loyal friend!
        </p>
        <p>
          You can also help animals by&nbsp;making a&nbsp;donation for their needs. All money,
          things and food will be&nbsp;transferred to&nbsp;shelters.
        </p>
      </>
    ),
    title: 'Helping homeless animals',
  },
]

const noList = ['no religion', 'no nation', 'no politics', 'no borders']

export const Directions = () => {
  return (
    <section className={s.section} id={'directions'}>
      <div className={'container'}>
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
          <NoList />
        </div>
        <DirectionsItems />
      </div>
    </section>
  )
}

const DirectionsItems = () => (
  <ul className={s.items}>
    {directionsData.map((direction, index) => (
      <li className={s.item} key={index}>
        <DirectionCard
          img={direction.img}
          linkTo={direction.linkTo}
          text={direction.text}
          title={direction.title}
        />
      </li>
    ))}
  </ul>
)

const NoList = () => (
  <ul className={s.no}>
    {noList.map((item, index) => (
      <Typography as={'li'} key={index} variant={TypographyVariant.slogan}>
        {item}
      </Typography>
    ))}
  </ul>
)
