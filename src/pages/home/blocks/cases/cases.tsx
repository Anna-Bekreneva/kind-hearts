import { FC } from 'react'

import { TypographyVariant } from '@/common'
import { CaseCard, CaseType, Typography } from '@/components'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './cases-swiper.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './cases.module.scss'

const dataCases: CaseType[] = [
  {
    alt: 'Charity Day',
    avif: '/assets/images/cases/1.avif',
    date: 'June 2023',
    dateTime: '2023-06',
    src: '/assets/images/cases/1.jpg',
    title: 'Charity Day,',
    webp: '/assets/images/cases/1.webp',
  },
  {
    alt: 'Charity Day',
    avif: '/assets/images/cases/2.avif',
    date: 'June 2023',
    dateTime: '2023-06',
    src: '/assets/images/cases/2.jpg',
    title: 'Charity Day,',
    webp: '/assets/images/cases/2.webp',
  },
  {
    alt: 'Charity Day',
    avif: '/assets/images/cases/3.avif',
    date: 'June 2023',
    dateTime: '2023-06',
    src: '/assets/images/cases/3.jpg',
    title: 'Charity Day,',
    webp: '/assets/images/cases/3.webp',
  },
  {
    alt: 'Charity Day',
    avif: '/assets/images/cases/4.avif',
    date: 'June 2023',
    dateTime: '2023-06',
    src: '/assets/images/cases/4.jpg',
    title: 'Charity Day,',
    webp: '/assets/images/cases/4.webp',
  },
  {
    alt: 'Collecting food for refugees',
    avif: '/assets/images/cases/5.avif',
    date: 'August 2023',
    dateTime: '2023-08',
    src: '/assets/images/cases/5.jpg',
    title: `Collecting food for\u00A0refugees,`,
    webp: '/assets/images/cases/5.webp',
  },
  {
    alt: 'Collecting food for refugees',
    avif: '/assets/images/cases/6.avif',
    date: 'August 2023',
    dateTime: '2023-08',
    src: '/assets/images/cases/6.jpg',
    title: 'Collecting food for\u00A0refugees,',
    webp: '/assets/images/cases/6.webp',
  },
  {
    alt: 'Collecting food for refugees',
    avif: '/assets/images/cases/7.avif',
    date: 'September 2023',
    dateTime: '2023-09',
    src: '/assets/images/cases/7.jpg',
    title: 'Collecting food for\u00A0refugees,',
    webp: '/assets/images/cases/7.webp',
  },
  {
    alt: 'Shelter pet day',
    avif: '/assets/images/cases/8.avif',
    date: 'April 2023',
    dateTime: '2023-04',
    src: '/assets/images/cases/8.jpg',
    title: 'Shelter pet day,',
    webp: '/assets/images/cases/8.webp',
  },
  {
    alt: 'Shelter pet day',
    avif: '/assets/images/cases/9.avif',
    date: 'April 2023',
    dateTime: '2023-04',
    src: '/assets/images/cases/9.jpg',
    title: 'Shelter pet day,',
    webp: '/assets/images/cases/9.webp',
  },
  {
    alt: 'Shelter pet day',
    avif: '/assets/images/cases/10.avif',
    date: 'April 2023',
    dateTime: '2023-04',
    src: '/assets/images/cases/10.jpg',
    title: 'Shelter pet day,',
    webp: '/assets/images/cases/10.webp',
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
                  avif={item.avif}
                  height={500}
                  loading={'lazy'}
                  src={item.src}
                  title={item.title}
                  webp={item.webp}
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
