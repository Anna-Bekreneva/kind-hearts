import { Footer, Header } from '@/components'
import { Advantages, Directions, Hero, Questions, StateSupports, WaysHelp } from '@/pages'

export const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Directions />
      <WaysHelp />
      <StateSupports />
      <Questions />
      <Footer />
    </>
  )
}
