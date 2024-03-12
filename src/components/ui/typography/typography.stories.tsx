import { Meta, StoryObj } from '@storybook/react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

const meta = {
  title: 'Components/ui/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['large', 'title', 'subtitle1', 'subtitle2', 'slogan', 'text'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: TypographyVariant.large,
    children: 'Typography large',
    as: 'h1',
  },
}

export const Title: Story = {
  args: {
    variant: TypographyVariant.title,
    children: 'Typography title',
    as: 'h2',
  },
}

export const Subtitle1: Story = {
  args: {
    variant: TypographyVariant.subtitle1,
    children: 'Typography subtitle 1',
    as: 'h3',
  },
}

export const Subtitle2: Story = {
  args: {
    variant: TypographyVariant.subtitle2,
    children: 'Typography subtitle 2',
    as: 'h3',
  },
}

export const Slogan: Story = {
  args: {
    variant: TypographyVariant.text,
    children: 'Typography text',
    as: 'p',
  },
}
