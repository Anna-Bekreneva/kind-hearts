import { memo } from 'react'

import { Button, ControlledTextField, Typography, useFormHook } from '@/components'

import s from './form.module.scss'

export const Form = memo(() => {
  const { control, submitFormHandler } = useFormHook()

  return (
    <form className={s.form} onSubmit={submitFormHandler}>
      <div className={s.fields}>
        <ControlledTextField
          as={'input'}
          control={control}
          name={'name'}
          placeholder={'Introduce youreself'}
        />
        <ControlledTextField
          as={'input'}
          control={control}
          name={'email'}
          placeholder={'Enter email address'}
        />
        <ControlledTextField
          as={'textarea'}
          control={control}
          name={'message'}
          placeholder={'Your question'}
        />
      </div>
      <Typography className={s.police}>
        By&nbsp;clicking Submit, you are agreeing <br /> to our{' '}
        <Typography as={'a'} className={s.link} href={'#'}>
          Privacy Policy
        </Typography>
        .
      </Typography>
      <Button className={s.button} type={'submit'}>
        Submit
      </Button>
    </form>
  )
})
