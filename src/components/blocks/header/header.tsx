import { memo } from 'react'
import { Link } from 'react-scroll'

import { TypographyVariant } from '@/common'
import { Logo, Typography, useHeader } from '@/components'

import s from './header.module.scss'

const menu: Omit<MenuItemType, 'callback'>[] = [
  { text: 'What we do', to: 'directions' },
  { text: 'Ways to help', to: 'ways-help' },
  { text: 'Our cases', to: 'cases' },
  { text: 'Tax benefits', to: 'state-support' },
  { text: 'Contacts', to: 'contacts' },
]

export const Header = memo(() => {
  const { burgerButtonRef, isOpenMenu, menuWrapperRef, setIsOpenMenu } = useHeader()

  return (
    <header className={s.header}>
      {isOpenMenu && <div aria-hidden className={'overlay'}></div>}
      <div className={s.fixed}>
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
})

type MenuItemType = {
  callback: () => void
  text: string
  to: string
}

const MenuItem = memo(({ callback, text, to }: MenuItemType) => {
  return (
    <li>
      <Link className={'link'} href={'#'} offset={-50} onClick={callback} role={'menuitem'} smooth to={to}>
        {text}
      </Link>
    </li>
  )
})
