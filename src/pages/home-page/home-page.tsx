import { Footer, Header, Hero } from '@/components'
import {
  Advantages,
  Cases,
  Consultation,
  Contacts,
  Directions,
  Questions,
  StateSupports,
  WaysHelp,
} from '@/pages'

export const HomePage = () => {
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
}
