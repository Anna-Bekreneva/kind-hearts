import { Footer, Header, Hero } from '@/components'
import { PrivacyPolicyBlock } from '@/pages'

export const PrivacyPolicePage = () => {
  return (
    <>
      <Header />
      <main className={'main'}>
        <Hero title={'Privacy Policy for\u00A0Charitable Foundation «Kind\u00A0Hearts»'}/>
        <PrivacyPolicyBlock />
      </main>
      <Footer />
    </>
  )
}
