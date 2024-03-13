import { ComponentPropsWithoutRef, ElementType, memo, useState } from 'react'

import s from './textField.module.scss'

import { AlertIcon } from '@/assets'
import { Typography } from '@/components'

type Props<T extends ElementType> = {
  errorMessage?: string
  onValueChange?: (value: string) => void
  as?: T
} & ComponentPropsWithoutRef<T>
export const TextField = memo(<T extends ElementType = 'input'>(props: Props<T>) => {
  const { errorMessage, onValueChange, className, as: Tag = 'input', ...rest } = props

  const [isShowError, setIsShowError] = useState(false)
  const changeIsShowError = () => setIsShowError(!isShowError)

  const fieldClassName = `${s.field} ${errorMessage ? s.error : ''} ${
    Tag === 'textarea' ? s.textarea : ''
  }`
  const containerClassName = `${className} ${s.container} ${errorMessage ? s.errorContainer : ''}`

  return (
    <div className={containerClassName}>
      <Tag
        className={fieldClassName}
        aria-describedby={isShowError ? 'errorMessage' : undefined}
        aria-invalid={!!errorMessage}
        onChange={e => onValueChange?.(e.currentTarget.value)}
        {...rest}
      />
      {errorMessage && (
        <button
          className={s.buttonShowError}
          id={'buttonShowError'}
          onClick={changeIsShowError}
          aria-label={isShowError ? 'hide error' : 'show error'}
          aria-expanded={isShowError}
          aria-controls={'errorMessage'}
        >
          <AlertIcon />
        </button>
      )}
      {isShowError && (
        <Typography
          className={s.errorMessage}
          as={'span'}
          id={'errorMessage'}
          aria-live="assertive"
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
