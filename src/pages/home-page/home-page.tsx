import { CustomHead, Footer, Header, Hero } from '@/components'
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
      <CustomHead
        description={
          'The Charitable Foundation «Kind Hearts» was created to provide assistance to people in need and homeless animals.'
        }
        title={'Home page | Kind Hearts'}
      />
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
