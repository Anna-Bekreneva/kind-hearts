import { Typography } from '@/components'

import s from './content.module.scss'

export const PrivacyPolicyContent = () => {
  return (
    <div className={s.container}>
      <div className={s.block}>
        <Typography as={'h1'} variant={'title'}>
          Privacy Policy
        </Typography>
        <div className={s.text}>
          <Typography>
            Last updated: <time dateTime={'2024-06-26'}>June 26, 2024</time>
          </Typography>
          <Typography>
            This Privacy Policy describes Our policies and procedures on&nbsp;the collection, use
            and disclosure of&nbsp;Your information when You use the Service and tells You about
            Your privacy rights and how the law protects You.
          </Typography>
          <Typography>
            We&nbsp;use Your Personal data to&nbsp;provide and improve the Service. By&nbsp;using
            the Service, You agree to&nbsp;the collection and use of&nbsp;information
            in&nbsp;accordance with this Privacy Policy. This Privacy Policy has been created with
            the help of&nbsp;the&nbsp;Free Privacy Policy Generator.
          </Typography>
        </div>
      </div>
      <div className={s.block}>
        <Typography as={'h3'} variant={'title'}>
          1. Interpretation and&nbsp;Definitions
        </Typography>
        <div className={s.descr}>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Interpretation
            </Typography>
            <Typography>
              The words of&nbsp;which the initial letter is&nbsp;capitalized have meanings defined
              under the following conditions. The following definitions shall have the same meaning
              regardless of&nbsp;whether they appear in&nbsp;singular or&nbsp;in&nbsp;plural.
            </Typography>
          </div>
        </div>
        <div className={s.descr}>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Definitions
            </Typography>
            <Typography>For the purposes of&nbsp;this Privacy Policy:</Typography>
            <ul>
              <Typography as={'li'}>
                <b>Account</b>&nbsp;means a&nbsp;unique account created for You to&nbsp;access our
                Service or&nbsp;parts of&nbsp;our Service.
              </Typography>
              <Typography as={'li'}>
                <b>Affiliate</b>&nbsp;means an&nbsp;entity that controls, is&nbsp;controlled
                by&nbsp;or&nbsp;is&nbsp;under common control with a&nbsp;party, where «control»
                means ownership of&nbsp;50% or&nbsp;more of&nbsp;the shares, equity interest
                or&nbsp;other securities entitled to&nbsp;vote for election of&nbsp;directors
                or&nbsp;other managing authority.
              </Typography>
              <Typography as={'li'}>
                <b>Company</b>&nbsp;(referred to&nbsp;as&nbsp;either «the Company», «We», «Us»
                or&nbsp;«Our» in&nbsp;this Agreement) refers to&nbsp;Charitable Foundation «Kind
                Hearts» Non-profit, 77 Bowery, New York, NY&nbsp;10002, 8th&nbsp;floor.
              </Typography>
              <Typography as={'li'}>
                <b>Cookies</b>&nbsp;are small files that are placed on&nbsp;Your computer, mobile
                device or&nbsp;any other device by&nbsp;a&nbsp;website, containing the details
                of&nbsp;Your browsing history on&nbsp;that website among its many uses.
              </Typography>
              <Typography as={'li'}>
                <b>Country</b>&nbsp;refers to: New York, United States
              </Typography>
              <Typography as={'li'}>
                <b>Device</b>&nbsp;means any device that can access the Service such
                as&nbsp;a&nbsp;computer, a&nbsp;cellphone or&nbsp;a&nbsp;digital tablet.
              </Typography>
              <Typography as={'li'}>
                <b>Personal Data</b>&nbsp;is&nbsp;any information that relates
                to&nbsp;an&nbsp;identified or&nbsp;identifiable individual.
              </Typography>
              <Typography as={'li'}>
                <b>Service</b>&nbsp;refers to&nbsp;the Website.
              </Typography>
              <Typography as={'li'}>
                <b>Service Provider</b>&nbsp;means any natural or&nbsp;legal person who processes
                the data on&nbsp;behalf of&nbsp;the Company. It&nbsp;refers to&nbsp;third-party
                companies or&nbsp;individuals employed by&nbsp;the Company to&nbsp;facilitate the
                Service, to&nbsp;provide the Service on&nbsp;behalf of&nbsp;the Company,
                to&nbsp;perform services related to&nbsp;the Service or&nbsp;to&nbsp;assist the
                Company in&nbsp;analyzing how the Service is&nbsp;used.
              </Typography>
              <Typography as={'li'}>
                <b>Usage Data</b>&nbsp;refers to&nbsp;data collected automatically, either generated
                by&nbsp;the use of&nbsp;the Service or&nbsp;from the Service infrastructure itself
                (for example, the duration of&nbsp;a&nbsp;page visit).
              </Typography>
              <Typography as={'li'}>
                <b>Website</b>&nbsp;refers to&nbsp;Charitable Foundation «Kind Hearts», accessible
                from&nbsp;
                <Typography as={'a'} href={'https://kind-hearts.vercel.app'} target={'_blank'}>
                  https://kind-hearts.vercel.app
                </Typography>
              </Typography>
              <Typography as={'li'}>
                <b>You</b>&nbsp;means the individual accessing or&nbsp;using the Service,
                or&nbsp;the company, or&nbsp;other legal entity on&nbsp;behalf of&nbsp;which such
                individual is&nbsp;accessing or&nbsp;using the Service, as&nbsp;applicable.
              </Typography>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.block}>
        <Typography as={'h3'} variant={'title'}>
          3. Children’s&nbsp;Privacy
        </Typography>
        <div className={s.text}>
          <Typography>
            Our Service does not address anyone under the age of&nbsp;13. We&nbsp;do&nbsp;not
            knowingly collect personally identifiable information from anyone under the age
            of&nbsp;13. If&nbsp;You are a&nbsp;parent or&nbsp;guardian and You are aware that Your
            child has provided Us&nbsp;with Personal Data, please contact&nbsp;Us.
            If&nbsp;We&nbsp;become aware that We&nbsp;have collected Personal Data from anyone under
            the age of&nbsp;13 without verification of&nbsp;parental consent, We&nbsp;take steps
            to&nbsp;remove that information from Our servers.
          </Typography>
          <Typography>
            If&nbsp;We&nbsp;need to&nbsp;rely on&nbsp;consent as&nbsp;a&nbsp;legal basis for
            processing Your information and Your country requires consent from a&nbsp;parent,
            We&nbsp;may require Your parent’s&nbsp;consent before We&nbsp;collect and use that
            information.
          </Typography>
        </div>
      </div>
      <div className={s.block}>
        <Typography as={'h3'} variant={'title'}>
          4. Links to&nbsp;Other Websites
        </Typography>
        <div className={s.text}>
          <Typography>
            Our Service may contain links to&nbsp;other websites that are not operated by&nbsp;Us.
            If&nbsp;You click on&nbsp;a&nbsp;third party link, You will be&nbsp;directed
            to&nbsp;that third party’s&nbsp;site. We&nbsp;strongly advise You to&nbsp;review the
            Privacy Policy of&nbsp;every site You visit.
          </Typography>
          <Typography>
            We&nbsp;have no&nbsp;control over and assume no&nbsp;responsibility for the content,
            privacy policies or&nbsp;practices of&nbsp;any third party sites or&nbsp;services.
          </Typography>
        </div>
      </div>
      <div className={s.block}>
        <Typography as={'h3'} variant={'title'}>
          5. Changes to&nbsp;this Privacy Policy
        </Typography>
        <div className={s.text}>
          <Typography>
            We&nbsp;may update Our Privacy Policy from time to&nbsp;time. We&nbsp;will notify You
            of&nbsp;any changes by&nbsp;posting the new Privacy Policy on&nbsp;this page.
          </Typography>
          <Typography>
            We&nbsp;will let You know via email and/or&nbsp;a&nbsp;prominent notice on&nbsp;Our
            Service, prior to&nbsp;the change becoming effective and update the «Last updated» date
            at&nbsp;the top of&nbsp;this Privacy Policy.
          </Typography>
          <Typography>
            You are advised to&nbsp;review this Privacy Policy periodically for any changes. Changes
            to&nbsp;this Privacy Policy are effective when they are posted on&nbsp;this page.
          </Typography>
        </div>
      </div>
      <div className={s.block}>
        <Typography as={'h3'} variant={'title'}>
          6. Contact Us
        </Typography>
        <div className={s.text}>
          <Typography>
            If&nbsp;you have any questions about this Privacy Policy, You can contact us:
          </Typography>
          <ul className={s.text}>
            <li>
              By&nbsp;email:&nbsp;
              <a href={'mailto:khertscharity@gmail.com'} rel={'noreferrer'} target={'_blank'}>
                khertscharity@gmail.com
              </a>
            </li>
            <li>
              By&nbsp;visiting this page on&nbsp;our website:&nbsp;
              <Typography as={'a'} href={'https://kind-hearts.vercel.app'} target={'_blank'}>
                https://kind-hearts.vercel.app
              </Typography>
              https://kind-hearts.vercel.app/
            </li>
            <li>
              By&nbsp;phone number:&nbsp;
              <Typography as={'a'} href={'tel:+17327886611'}>
                +1 (732) 7886611
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
