import { FC, useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

import s from './header.module.scss'

import { TypographyVariant } from '@/common'
import { Logo, Typography } from '@/components'

const menu: Omit<MenuItemType, 'callback'>[] = [
  { text: 'What we do', to: '' },
  { text: 'Ways to help', to: '' },
  { text: 'Our cases', to: '' },
  { text: 'Tax benefits', to: '' },
  { text: 'Contacts', to: '' },
]

export const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const menuWrapperRef = useRef<null | HTMLDivElement>(null)
  const burgerButtonRef = useRef<null | HTMLButtonElement>(null)

  useEffect(() => {
    const body = document.querySelector('body')

    if (isOpenMenu) {
      body?.classList.add('disable-scroll')
    } else {
      body?.classList.remove('disable-scroll')
    }
  }, [isOpenMenu])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !menuWrapperRef.current?.contains(event.target as Node) &&
        !burgerButtonRef.current?.contains(event.target as Node)
      ) {
        setIsOpenMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpenMenu])

  return (
    <header className={s.header}>
      {isOpenMenu && <div className={'overlay'} aria-hidden></div>}
      <div className={s.fixed} data-open={isOpenMenu}>
        <div className="container">
          <nav className={s.wrapper}>
            <Logo />
            <button
              className={s.burgerButton}
              id={'burger-button'}
              type={'button'}
              ref={burgerButtonRef}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              data-open={isOpenMenu}
              aria-controls={'burger-menu'}
              aria-expanded={isOpenMenu}
            >
              <span className={s.burgerLine}></span>
              <span className={'sr-only'}>{isOpenMenu ? 'Close menu' : 'Open menu'}</span>
            </button>

            <div
              className={s.menu}
              id={'burger-menu'}
              data-open={isOpenMenu}
              ref={menuWrapperRef}
              role="menu"
            >
              <div className={s.menuWrapper} data-open={isOpenMenu}>
                <ul className={s.items}>
                  {menu.map((item, index) => (
                    <MenuItem
                      key={index}
                      to={item.to}
                      text={item.text}
                      callback={() => setIsOpenMenu(false)}
                    />
                  ))}
                </ul>
                <ul className={s.mobile}>
                  <li>
                    <Typography
                      variant={TypographyVariant.subtitle1}
                      as={'a'}
                      href={'tel:+17186350030'}
                      role={'menuitem'}
                    >
                      +1 (718) 6350030
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant={TypographyVariant.subtitle1}
                      as={'a'}
                      href={'#'}
                      target="_blank"
                      role={'menuitem'}
                    >
                      Instagram
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

type MenuItemType = {
  text: string
  to: string
  callback: () => void
}

const MenuItem: FC<MenuItemType> = ({ text, to, callback }) => {
  return (
    <li>
      <Link onClick={callback} to={to} role={'menuitem'}>
        {text}
      </Link>
    </li>
  )
}
