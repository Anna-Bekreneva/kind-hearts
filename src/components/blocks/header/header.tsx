import { FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { TypographyVariant } from '@/common'
import { Logo, Typography } from '@/components'

import s from './header.module.scss'

const menu: Omit<MenuItemType, 'callback'>[] = [
  { text: 'What we do', to: '' },
  { text: 'Ways to help', to: '' },
  { text: 'Our cases', to: '' },
  { text: 'Tax benefits', to: '' },
  { text: 'Contacts', to: '' },
]

export const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const menuWrapperRef = useRef<HTMLDivElement | null>(null)
  const burgerButtonRef = useRef<HTMLButtonElement | null>(null)

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
      {isOpenMenu && <div aria-hidden className={'overlay'}></div>}
      <div className={s.fixed} data-open={isOpenMenu}>
        <div className={'container'}>
          <nav className={s.wrapper}>
            <Logo />
            <button
              aria-controls={'burger-menu'}
              aria-expanded={isOpenMenu}
              className={s.burgerButton}
              data-open={isOpenMenu}
              id={'burger-button'}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              ref={burgerButtonRef}
              type={'button'}
            >
              <span className={s.burgerLine}></span>
              <span className={'sr-only'}>{isOpenMenu ? 'Close menu' : 'Open menu'}</span>
            </button>

            <div
              className={s.menu}
              data-open={isOpenMenu}
              id={'burger-menu'}
              ref={menuWrapperRef}
              role={'menu'}
            >
              <div className={s.menuWrapper} data-open={isOpenMenu}>
                <ul className={s.items}>
                  {menu.map((item, index) => (
                    <MenuItem
                      callback={() => setIsOpenMenu(false)}
                      key={index}
                      text={item.text}
                      to={item.to}
                    />
                  ))}
                </ul>
                <ul className={s.mobile}>
                  <li>
                    <Typography
                      as={'a'}
                      href={'tel:+17186350030'}
                      role={'menuitem'}
                      variant={TypographyVariant.subtitle1}
                    >
                      +1 (718) 6350030
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      as={'a'}
                      href={'#'}
                      role={'menuitem'}
                      target={'_blank'}
                      variant={TypographyVariant.subtitle1}
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
  callback: () => void
  text: string
  to: string
}

const MenuItem: FC<MenuItemType> = ({ callback, text, to }) => {
  return (
    <li>
      <Link onClick={callback} role={'menuitem'} to={to}>
        {text}
      </Link>
    </li>
  )
}
