import { BurgerButton, Logo, Menu, useHeader } from '@/components'
import { backgroundVariants, overlayVariants } from '@/utils'
import { AnimatePresence, motion } from 'framer-motion'

import s from './header.module.scss'

export const Header = () => {
  const { burgerButtonRef, height, isOpenMenu, menuWrapperRef, navigationRef, setIsOpenMenu } =
    useHeader()

  return (
    <header className={s.header}>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            animate={isOpenMenu ? 'open' : 'closed'}
            aria-hidden
            className={'overlay'}
            exit={overlayVariants.closed}
            initial={overlayVariants.closed}
            variants={overlayVariants}
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
            ref={navigationRef}
          >
            <Logo />
            <BurgerButton isOpen={isOpenMenu} ref={burgerButtonRef} setIsOpen={setIsOpenMenu} />
            <Menu ref={menuWrapperRef} setIsOpen={setIsOpenMenu} />
            <motion.div className={s.background} variants={backgroundVariants} />
          </motion.nav>
        </div>
      </div>
    </header>
  )
}
