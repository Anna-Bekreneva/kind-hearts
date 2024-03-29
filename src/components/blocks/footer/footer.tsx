import { FC } from 'react'

import s from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={`${s.section} section`}>
      <div className="container">
        <div className={`${s.wrapper} section__wrapper`}>
          <span>© Kind Hearts 2024</span>
          <a href={'#'}>Instagram</a>
          <a href={'#'}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
