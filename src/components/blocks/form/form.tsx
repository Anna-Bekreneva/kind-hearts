import { memo } from 'react'

import { Button, ControlledTextField, Typography, useFormHook } from '@/components'

import s from './form.module.scss'

export const Form = memo(() => {
  const { control, errors, formRef, submitFormHandler } = useFormHook()

  return (
    <form className={s.form} onSubmit={submitFormHandler} ref={formRef}>
      <div className={s.fields}>
        <ControlledTextField
          as={'input'}
          control={control}
          errorMessage={errors.name?.message}
          name={'name'}
          placeholder={'Introduce yourself'}
        />
        <ControlledTextField
          as={'input'}
          control={control}
          errorMessage={errors.name?.message}
          name={'email'}
          placeholder={'Enter email address'}
        />
        <ControlledTextField
          as={'textarea'}
          control={control}
          errorMessage={errors.message?.message}
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
