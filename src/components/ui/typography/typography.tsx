import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import s from './typography.module.scss'

import { TypographyVariant } from '@/common'

type Props<T extends ElementType = 'p'> = {
  as?: T
  variant?: keyof typeof TypographyVariant
} & ComponentPropsWithoutRef<T>
export const TypographyPolymorph = <T extends ElementType = 'p'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref: ElementRef<T>
) => {
  const { variant = TypographyVariant.text, as: Tag = 'p', className, ...rest } = props

  const typographyClassName = `${s.typography} ${s[String(variant)]} ${className}`

  return (
    // @ts-expect-error TS2322
    <Tag className={typographyClassName} ref={ref} {...rest} />
  )
}

export const Typography = forwardRef(TypographyPolymorph) as <T extends ElementType = 'button'>(
  props: Props<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof TypographyPolymorph>
