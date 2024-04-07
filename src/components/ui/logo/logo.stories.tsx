import { LogoVariant } from '@/common'
import { Logo } from '@/components'
import { StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  argTypes: {
    to: { default: '/', type: 'string' },
    variant: {
      control: { type: 'radio' },
      options: Object.values(LogoVariant),
    },
  },
  component: Logo,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Components/ui/Logo',
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
