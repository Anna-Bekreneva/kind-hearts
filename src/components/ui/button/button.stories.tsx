import { Meta, StoryObj } from '@storybook/react'

import { ButtonVariant } from '@/common'
import { Button } from '@/components'

const meta = {
  title: 'Components/ui/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ButtonVariant,
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: ButtonVariant.primary,
    children: 'Primary button',
  },
}

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.secondary,
    children: 'Secondary button',
  },
}
