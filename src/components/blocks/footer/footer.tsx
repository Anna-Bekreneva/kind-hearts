import s from './footer.module.scss'
export const Footer = () => {
  return (
    <footer className={`${s.section} section`}>
      <div className="container">
        <div className={s.wrapper}>
          <span>© Kind Hearts 2024</span>
          <a href={'#'}>Instagram</a>
          <a href={'#'}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
