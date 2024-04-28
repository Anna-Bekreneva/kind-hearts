import { memo } from 'react'

import { Footer, Header } from '@/components'
import {
  Advantages,
  Cases,
  Consultation,
  Contacts,
  Directions,
  Hero,
  Questions,
  StateSupports,
  WaysHelp,
} from '@/pages'

export const HomePage = memo(() => {
  return (
    <>
      <Header />
      <main className={'main'}>
        <Hero />
        <Advantages />
        <Directions />
        <WaysHelp />
        <Cases />
        <StateSupports />
        <Questions />
        <Consultation />
        <Contacts />
      </main>
      <Footer />
    </>
  )
})
