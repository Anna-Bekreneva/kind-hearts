import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import s from './button.module.scss'

import { ButtonVariant } from '@/common'

type Props<T extends ElementType> = {
  as?: T
  variant?: keyof typeof ButtonVariant
}

export const ButtonPolymorph = <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref: ElementRef<T>
) => {
  const { variant = ButtonVariant.primary, as: Tag = 'button', className, ...rest } = props

  const buttonClassName = `${s.button} ${s[String(variant)]} ${className}`

  return (
    // @ts-expect-error TS2322
    <Tag className={buttonClassName} ref={ref} {...rest} />
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: Props<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof ButtonPolymorph>
