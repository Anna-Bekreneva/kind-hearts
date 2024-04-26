import { FC } from 'react'

import { TypographyVariant } from '@/common'
import { AddressCard, AddressCardProps, Typography } from '@/components'

import s from './contacts.module.scss'

const dataAddress: AddressCardProps[] = [
  {
    backgroundColor: '#FFFAE9',
    borderColor: '#DFD1A2',
    text: '77 Bowery, New York, NY\u00A010\u00A0002, 8th\u00A0floor',
    title: 'Office address',
  },
  {
    backgroundColor: '#FBF8FF',
    borderColor: '#D7CCE5',
    text: '63-36 110th St, Forest Hills, NY 11375',
    title: 'Warehouse address',
  },
  {
    backgroundColor: '#F2FFEF',
    borderColor: '#CCDBC9',
    text: 'Monday-Thursday: 10\u00A0a.m.\u00A0to\u00A05 p.m.',
    title: 'Opening hours',
  },
]

type ContactsCardType = {
  href: string
  link: string
  title: string
}

const dataContacts: ContactsCardType[] = [
  {
    href: 'tel:+17327886611',
    link: '+1 (732) 7886611',
    title: 'Call us',
  },
  {
    href: 'mailto:khertscharity@gmail.com',
    link: 'khertscharity@gmail.com',
    title: 'E-mail us',
  },
  {
    href: 'https://www.instagram.com/kindheartsfound?igsh=MXRyMDJ6M3ZycnducQ%3D%3D',
    link: 'Instagram',
    title: 'Follow us\u00A0on\u00A0social media',
  },
]

export const Contacts: FC = () => {
  return (
    <section className={'section'}>
      <div className={'container'}>
        <Typography as={'h2'} className={s.title} variant={TypographyVariant.title}>
          Contacts
        </Typography>
        <address>
          <div className={s.wrapper}>
            <ul className={s.items}>
              {dataAddress.map((item, index) => {
                const { text, title, ...rest } = item

                return (
                  <li className={s.item} key={index}>
                    <AddressCard text={text} title={title} {...rest} />
                  </li>
                )
              })}
            </ul>
            <div className={s.map}>
              <iframe
                allowFullScreen
                height={'450'}
                loading={'lazy'}
                referrerPolicy={'no-referrer-when-downgrade'}
                src={
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10168.945675482133!2d-73.8520030792104!3d40.73462019222683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e2c9f40d3d3%3A0x9be550f4a7fea8cf!2zNjMtMzYgMTEwdGggU3QsIEZvcmVzdCBIaWxscywgTlkgMTEzNzUsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1713348979667!5m2!1sru!2sru'
                }
              />
            </div>
          </div>
          <ul className={s.contacts}>
            {dataContacts.map((contact, index) => (
              <li className={s.contact} key={index}>
                <Typography as={'span'} className={s.subtitle}>
                  {contact.title}
                </Typography>
                <Typography
                  as={'a'}
                  href={contact.href}
                  target={'_blank'}
                  variant={TypographyVariant.subtitle1}
                >
                  {contact.link}
                </Typography>
              </li>
            ))}
          </ul>
        </address>
      </div>
    </section>
  )
}
