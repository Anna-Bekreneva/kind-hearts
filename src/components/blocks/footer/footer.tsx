import { APP_ROUTES, CONTACTS } from '@/utils'

import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={`${s.section} section`}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <span>© Kind Hearts 2024</span>
          <a className={'link'} href={CONTACTS.instagram.href} rel={'noreferrer'} target={'_blank'}>
            {CONTACTS.instagram.label}
          </a>
          <a className={'link'} href={APP_ROUTES.privacyPolicy}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
