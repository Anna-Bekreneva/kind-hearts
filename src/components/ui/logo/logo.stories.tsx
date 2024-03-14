import { StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

import { LogoVariant } from '@/common'
import { Logo } from '@/components'

const meta = {
  title: 'Components/ui/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: Object.values(LogoVariant),
      control: { type: 'radio' },
    },
    to: { type: 'string', default: '/' },
  },
  decorators: [withRouter],
}

export default meta

type Story = StoryObj<typeof meta>

export const LogoDefault: Story = {
  args: {
    variant: 'vertical',
  },
}

export const LogoVertical: Story = {
  args: {
    variant: 'horizontal',
  },
}

export const LogoHorizontal: Story = {
  args: {
    variant: 'vertical',
  },
}
