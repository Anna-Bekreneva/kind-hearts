import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const ConsultationFormSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  message: z.string().optional(),
  name: z.string().min(3).max(30),
})

export type ConsultationFormSchemaType = z.infer<typeof ConsultationFormSchema>

export const useFormHook = () => {
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

  const submitFormHandler = handleSubmit(submitHandler)

  return { control, submitFormHandler }
}
