import { Footer, Header } from '@/components'
import { Advantages, Questions, Hero, WaysHelp, StateSupports, Directions } from '@/pages'

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
