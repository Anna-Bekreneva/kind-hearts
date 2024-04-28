import { memo } from 'react'

import s from './footer.module.scss'

export const Footer = memo(() => {
  return (
    <footer className={`${s.section} section`}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <span>© Kind Hearts 2024</span>
          <a href={'https://www.instagram.com/kindheartsfound?igsh=MXRyMDJ6M3ZycnducQ%3D%3D'}>
            Instagram
          </a>
          <a href={'#'}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
})
