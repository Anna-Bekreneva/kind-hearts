import { PrivacyPolicyContent } from '@/pages'

import s from './privacy-policy.module.scss'
export const PrivacyPolicyBlock = () => {
  return (
    <section className={s.wrapper}>
      <div className={'container'}>
        <PrivacyPolicyContent />
      </div>
    </section>
  )
}
