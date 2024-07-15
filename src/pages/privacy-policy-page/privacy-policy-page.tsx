import { Footer, Header, Hero } from '@/components'
import { PrivacyPolicyBlock } from '@/pages'

export const PrivacyPolicePage = () => {
  return (
    <>
      <Header />
      <main className={'main'}>
        <Hero />
        <PrivacyPolicyBlock />
      </main>
      <Footer />
    </>
  )
}
