import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components'

const meta = {
  title: 'Components/ui/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    errorMessage: { type: 'string' },
    disabled: { type: 'boolean' },
    placeholder: { type: 'string' },
    as: {
      options: ['input', 'textarea'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
  render: args => {
    const [value, setValue] = useState('')

    const changeHandler = (value: string) => {
      setValue(value)
      action(value)()
    }

    return (
      <TextField
        placeholder={'placeholder'}
        {...args}
        value={value}
        onValueChange={changeHandler}
      />
    )
  },
}

export const TextareaDefault: Story = {
  render: args => {
    const [value, setValue] = useState('')

    const changeHandler = (value: string) => {
      setValue(value)
      action(value)()
    }

    return (
      <TextField
        as={'textarea'}
        placeholder={'placeholder'}
        {...args}
        value={value}
        onValueChange={changeHandler}
      />
    )
  },
}

export const InputWithError: Story = {
  render: args => {
    const [value, setValue] = useState('')

    const changeHandler = (value: string) => {
      setValue(value)
      action(value)()
    }

    return (
      <TextField
        placeholder={'placeholder'}
        {...args}
        value={value}
        onValueChange={changeHandler}
      />
    )
  },
}
