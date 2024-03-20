import { FC, useState } from 'react'

import { Link } from 'react-router-dom'

import s from './header.module.scss'

import { Logo } from '@/components'

const menu: MenuItemType[] = [
  { text: 'What we do', to: '' },
  { text: 'Ways to help', to: '' },
  { text: 'Our cases', to: '' },
  { text: 'Tax benefits', to: '' },
  { text: 'Contacts', to: '' },
]

export const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <header className={s.header}>
      <div className={s.fixed}>
        <div className="container">
          <nav className={s.wrapper}>
            <Logo />
            <button
              className={s.burgerButton}
              type={'button'}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              data-open={isOpenMenu}
            >
              <span className={s.burgerLine}></span>
              <span className={'sr-only'}>Open menu</span>
            </button>

            <div className={s.menu} data-open={isOpenMenu}>
              <ul className={s.items}>
                {menu.map((item, index) => (
                  <MenuItem key={index} to={item.to} text={item.text}></MenuItem>
                ))}
              </ul>
              <ul className={s.mobile}>
                <li>
                  <a href="tel:+17186350030">+1 (718) 6350030</a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/*</Menu>*/}
          </nav>
        </div>
      </div>
    </header>
  )
}

type MenuItemType = {
  text: string
  to: string
}

const MenuItem: FC<MenuItemType> = ({ text, to }) => {
  return (
    <li>
      <Link to={to}> {text} </Link>
    </li>
  )
}
