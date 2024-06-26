import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={`${s.section} section`}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <span>© Kind Hearts 2024</span>
          <a
            className={'link'}
            href={'https://www.instagram.com/kindheartsfound?igsh=MXRyMDJ6M3ZycnducQ%3D%3D'}
            rel={'noreferrer'}
            target={'_blank'}
          >
            Instagram
          </a>
          <a className={'link'} href={'#'}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
