import { FC } from 'react'

import { TypographyVariant } from '@/common'
import { CaseCard, Typography } from '@/components'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './cases-swiper.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './cases.module.scss'

type DataCasesType = {
  alt: string
  basePath: string
  date: string
  dateTime: string
  title: string
}

const dataCases: DataCasesType[] = [
  {
    alt: 'Charity Day',
    basePath: '/assets/images/cases/1',
    date: 'June 2023',
    dateTime: '2023-06',
    title: 'Charity Day,',
  },
  {
    alt: 'Charity Day',
    basePath: '/assets/images/cases/2',
    date: 'June 2023',
    dateTime: '2023-06',
    title: 'Charity Day,',
  },
  {
    alt: 'Charity Day',
    basePath: '/assets/images/cases/3',
    date: 'June 2023',
    dateTime: '2023-06',
    title: 'Charity Day,',
  },
  {
    alt: 'Charity Day',
    basePath: '/assets/images/cases/4',
    date: 'June 2023',
    dateTime: '2023-06',
    title: 'Charity Day,',
  },
  {
    alt: 'Collecting food for refugees',
    basePath: '/assets/images/cases/5',
    date: 'August 2023',
    dateTime: '2023-08',
    title: `Collecting food for\u00A0refugees,`,
  },
  {
    alt: 'Collecting food for refugees',
    basePath: '/assets/images/cases/6',
    date: 'August 2023',
    dateTime: '2023-08',
    title: 'Collecting food for\u00A0refugees,',
  },
  {
    alt: 'Collecting food for refugees',
    basePath: '/assets/images/cases/7',
    date: 'September 2023',
    dateTime: '2023-09',
    title: 'Collecting food for\u00A0refugees,',
  },
  {
    alt: 'Shelter pet day',
    basePath: '/assets/images/cases/8',
    date: 'April 2023',
    dateTime: '2023-04',
    title: 'Shelter pet day,',
  },
  {
    alt: 'Shelter pet day',
    basePath: '/assets/images/cases/9',
    date: 'April 2023',
    dateTime: '2023-04',
    title: 'Shelter pet day,',
  },
  {
    alt: 'Shelter pet day',
    basePath: '/assets/images/cases/10',
    date: 'April 2023',
    dateTime: '2023-04',
    title: 'Shelter pet day,',
  },
]

export const Cases: FC = () => {
  const swiperBreakpoints = {
    0: { slidesPerGroup: 1, slidesPerView: 1 },
    560: { slidesPerGroup: 1, slidesPerView: 1.5 },
    768: { slidesPerGroup: 2, slidesPerView: 1.9 },
  }

  return (
    <section className={'section cases'}>
      <div className={s.container}>
        <div className={s.box}>
          <Typography as={'h2'} variant={TypographyVariant.title}>
            Our cases
          </Typography>
          <Swiper
            breakpoints={swiperBreakpoints}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={20}
          >
            {dataCases.map((item, index) => (
              <SwiperSlide key={index}>
                <CaseCard
                  alt={item.alt}
                  avif={`${item.basePath}.avif 1x, ${item.basePath}@2x.avif 2x`}
                  date={item.date}
                  dateTime={item.dateTime}
                  height={500}
                  loading={'lazy'}
                  src={`${item.basePath}.jpg`}
                  srcSet={`${item.basePath}@2x.jpg`}
                  title={item.title}
                  webp={`${item.basePath}.webp 1x, ${item.basePath}@2x.webp 2x`}
                  width={610}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
