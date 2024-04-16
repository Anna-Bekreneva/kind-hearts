import { Footer, Header } from '@/components'
import {
  Advantages,
  Cases,
  Consultation,
  Directions,
  Hero,
  Questions,
  StateSupports,
  WaysHelp,
} from '@/pages'

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Directions />
      <WaysHelp />
      <Cases />
      <StateSupports />
      <Questions />
      <Consultation />
      <Footer />
    </>
  )
}
