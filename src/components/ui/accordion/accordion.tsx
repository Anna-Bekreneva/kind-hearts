import { memo } from 'react'

import * as AccordionRadix from '@radix-ui/react-accordion'
import {
  AccordionContentProps,
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionMultipleProps,
  AccordionSingleProps,
} from '@radix-ui/react-accordion'

import s from './accordion.module.scss'

type AccordionPropsType = {
  className?: string
} & (AccordionMultipleProps | AccordionSingleProps)

export const Accordion = memo(({ className, ...rest }: AccordionPropsType) => {
  return <AccordionRadix.Root className={className} {...rest} />
})

type AccordionItemPropsType = {
  className?: string
} & AccordionItemProps
export const AccordionItem = memo(({ className, value, ...rest }: AccordionItemPropsType) => {
  return <AccordionRadix.Item className={`${s.item} ${className}`} value={value} {...rest} />
})

type AccordionHeaderPropsType = {
  className?: string
} & AccordionHeaderProps
export const AccordionHeader = memo(
  ({ children, className, ...rest }: AccordionHeaderPropsType) => {
    return (
      <AccordionRadix.Header className={className} {...rest}>
        <AccordionRadix.Trigger className={s.trigger}>{children}</AccordionRadix.Trigger>
      </AccordionRadix.Header>
    )
  }
)

type AccordionContentPropsType = {
  className?: string
} & AccordionContentProps
export const AccordionContent = memo(
  ({ children, className, ...rest }: AccordionContentPropsType) => {
    return (
      <AccordionRadix.Content className={`${s.content} ${className}`} {...rest}>
        {children}
      </AccordionRadix.Content>
    )
  }
)
