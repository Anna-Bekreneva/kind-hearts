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
    <div className={'wrapper'}>
      <Header />
      <main className={'main'}>
        <Hero isButton slogan={'Kindness is proof of\u00A0God'} />
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
    </div>
  )
}
