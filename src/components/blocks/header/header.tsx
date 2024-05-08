import { RefObject, forwardRef, memo, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'

import { TypographyVariant } from '@/common'
import { Logo, Typography, useHeader } from '@/components'
import { AnimatePresence, motion, useCycle } from 'framer-motion'

import s from './header.module.scss'

const menu: Omit<MenuItemType, 'callback'>[] = [
  { text: 'What we do', to: 'directions' },
  { text: 'Ways to help', to: 'ways-help' },
  { text: 'Our cases', to: 'cases' },
  { text: 'Tax benefits', to: 'state-support' },
  { text: 'Contacts', to: 'contacts' },
]

export const Header = memo(() => {
  const { burgerButtonRef, menuWrapperRef, setIsOpenMenu } = useHeader()

  const [isOpenMenu, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)

  const useDimensions = (ref: RefObject<HTMLDivElement>) => {
    const dimensions = useRef({ height: 0, width: 0 })

    useEffect(() => {
      if (ref.current) {
        dimensions.current.width = ref.current.offsetWidth
        dimensions.current.height = ref.current.offsetHeight
      }
    }, [ref])

    return dimensions.current
  }

  const { height } = useDimensions(menuWrapperRef)

  const sidebar = {
    closed: {
      clipPath: 'circle(19px at 259px 71px)',
      transition: {
        damping: 40,
        delay: 0.2,
        stiffness: 400,
        type: 'spring',
      },
    },

    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 259px 71px)`,
      transition: {
        restDelta: 2,
        stiffness: 20,
        type: 'spring',
      },
    }),
  }

  const overlay = {
    closed: {
      opacity: 0,
      transition: {
        damping: 40,
        delay: 0.4,
        duration: 0.2,
        stiffness: 400,
        type: 'spring',
      },
    },

    open: {
      opacity: 0.5,
      transition: {
        delay: 0.2,
        duration: 0.3,
        type: 'spring',
      },
    },
  }

  return (
    <header className={s.header}>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            animate={isOpenMenu ? 'open' : 'closed'}
            aria-hidden
            className={'overlay'}
            exit={overlay.closed}
            initial={overlay.closed}
            variants={overlay}
          />
        )}
      </AnimatePresence>
      <div className={s.fixed}>
        <div className={'container'}>
          <motion.nav
            animate={isOpenMenu ? 'open' : 'closed'}
            className={s.wrapper}
            custom={height}
            initial={false}
            ref={containerRef}
          >
            <Logo />
            <MenuToggle isOpen={isOpenMenu} ref={burgerButtonRef} toggle={() => toggleOpen()} />
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
            <motion.div className={s.background} variants={sidebar} />
          </motion.nav>
        </div>
      </div>
    </header>
  )
})

type MenuTogglePropsType = {
  isOpen: boolean
  toggle: () => void
}

export const MenuToggle = forwardRef<HTMLButtonElement, MenuTogglePropsType>(
  ({ isOpen, toggle }, ref) => {
    return (
      <button
        aria-controls={'burger-menu'}
        aria-expanded={isOpen}
        className={s.burgerButton}
        data-open={isOpen}
        id={'burger-button'}
        onClick={toggle}
        ref={ref}
        type={'button'}
      >
        <span className={s.burgerLine}></span>
        <span className={'sr-only'}>{isOpen ? 'Close menu' : 'Open menu'}</span>
      </button>
    )
  }
)

type MenuItemType = {
  callback: () => void
  text: string
  to: string
}

const MenuItem = memo(({ callback, text, to }: MenuItemType) => {
  return (
    <li>
      <Link
        className={'link'}
        href={'#'}
        offset={-50}
        onClick={callback}
        role={'menuitem'}
        smooth
        to={to}
      >
        {text}
      </Link>
    </li>
  )
})
