import { StoryObj } from '@storybook/react'

import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from '@/components'

const meta = {
  title: 'Components/ui/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AccodrionDefault: Story = {
  args: {
    type: 'single',
  },

  render: args => {
    const items = [
      {
        id: '1',
        header: 'Is it possible to make small contributions?',
        content:
          'It is a small contribution that speaks of a big heart. Don’t think about the fact that you can’t do much, but just imagine how much food a kitten needs, and you will understand that what is a matter of dinner for some is a matter of life for others.',
      },
      {
        id: '2',
        header: 'I have a wholesale batch of shoes in my warehouse. Can I donate it to the fund?',
        content:
          'Yes, sure! This will be a great help for people in need. Moreover, this will be mutual assistance: we will be able to provide you with a certificate that will allow you to reduce taxes on the donation amount.',
      },
    ]

    const onValueChange = (value: string | string[]) => console.log(value)

    return (
      <Accordion
        {...args}
        onValueChange={onValueChange}
        style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
      >
        {items.map(item => (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionHeader> {item.header} </AccordionHeader>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  },
}
