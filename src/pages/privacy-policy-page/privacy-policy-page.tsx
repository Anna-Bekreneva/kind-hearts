import { CustomHead, Footer, Header, Hero } from '@/components'
import { PrivacyPolicyBlock } from '@/pages'

export const PrivacyPolicyPage = () => {
  return (
    <>
      <CustomHead
        description={
          "This page contains information about the privacy policy of the Kind Hearts charitable foundation, including its principles for processing and protecting users' personal data."
        }
        title={'Privacy policy page | Kind Hearts'}
      />
      <Header />
      <main className={'main'}>
        <Hero title={'Privacy Policy for\u00A0Charitable Foundation «Kind\u00A0Hearts»'} />
        <PrivacyPolicyBlock />
      </main>
      <Footer />
    </>
  )
}
