import { memo } from 'react'
import { useForm } from 'react-hook-form'

import { TypographyVariant } from '@/common'
import { Button, ControlledTextField, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './consultation.module.scss'

const ConsultationFormSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  message: z.string().optional(),
  name: z.string().min(3).max(30),
})

type ConsultationFormSchemaType = z.infer<typeof ConsultationFormSchema>

export const Consultation = memo(() => {
  const { control, handleSubmit } = useForm<ConsultationFormSchemaType>({
    resolver: zodResolver(ConsultationFormSchema),
  })

  const submitHandler = (data: ConsultationFormSchemaType) => {
    console.log(data)
    sendToWhatsapp(data)
  }

  const sendToWhatsapp = (data: ConsultationFormSchemaType) => {
    const phone = '79853879297'

    const { email, message, name } = data

    const resMessage = encodeURIComponent(message ?? '')
    const resName = encodeURIComponent(name)

    const res = `name: ${resName}; email: ${email}; ${resMessage && `message: ${resMessage}`} `

    const url = `https://web.whatsapp.com/send?phone=${phone}&text=${res}&source=&data=`

    window.open(url)
  }

  return (
    <section className={'section'}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.descr}>
            <Typography as={'h2'} variant={TypographyVariant.title}>
              Get a personal consultation
            </Typography>
            <div className={s.text}>
              <Typography variant={TypographyVariant.subtitle2}>
                Fill out the form and we&nbsp;will contact you shortly.
              </Typography>
            </div>
          </div>
          <form className={s.form} onSubmit={handleSubmit(submitHandler)}>
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
        </div>
      </div>
    </section>
  )
})
