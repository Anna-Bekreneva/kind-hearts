import { CaseCard } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    title: {
      control: { type: 'string' },
    },
  },
  component: CaseCard,
  tags: ['autodocs'],
  title: 'Components/Cards/CaseCard',
} satisfies Meta<typeof CaseCard>

export default meta
type Story = StoryObj<typeof meta>

export const CaseCardDefault: Story = {
  args: {
    alt: 'People',
    avif: '/assets/images/cases/1.avif',
    src: '/assets/images/cases/1.jpg',
    title: 'Charity Day, June 2023',
    webp: '/assets/images/cases/1.webp',
  },
}
