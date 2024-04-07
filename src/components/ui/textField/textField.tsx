import { ComponentPropsWithoutRef, ElementType, memo, useState } from 'react'

import { AlertIcon, Typography } from '@/components'

import s from './textField.module.scss'

type Props<T extends ElementType> = {
  as?: T
  errorMessage?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<T>
export const TextField = memo(<T extends ElementType = 'input'>(props: Props<T>) => {
  const { as: Tag = 'input', className, errorMessage, onValueChange, ...rest } = props

  const [isShowError, setIsShowError] = useState(false)
  const changeIsShowError = () => setIsShowError(!isShowError)

  const fieldClassName = `${s.field} ${errorMessage ? s.error : ''} ${
    Tag === 'textarea' ? s.textarea : ''
  }`
  const containerClassName = `${className} ${s.container} ${errorMessage ? s.errorContainer : ''}`

  return (
    <div className={containerClassName}>
      <Tag
        aria-describedby={isShowError ? 'errorMessage' : undefined}
        aria-invalid={!!errorMessage}
        className={fieldClassName}
        onChange={e => onValueChange?.(e.currentTarget.value)}
        {...rest}
      />
      {errorMessage && (
        <button
          aria-controls={'errorMessage'}
          aria-expanded={isShowError}
          aria-label={isShowError ? 'hide error' : 'show error'}
          className={s.buttonShowError}
          id={'buttonShowError'}
          onClick={changeIsShowError}
        >
          <AlertIcon />
        </button>
      )}
      {isShowError && (
        <Typography
          aria-live={'assertive'}
          as={'span'}
          className={s.errorMessage}
          id={'errorMessage'}
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
