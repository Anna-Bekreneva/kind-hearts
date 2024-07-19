import { TypographyVariant } from '@/common'
import { AddressCard, Typography } from '@/components'
import { dataAddress, dataContacts } from '@/pages/home-page/blocks/contacts/data'

import s from './contacts.module.scss'

export const Contacts = () => {
  return (
    <section className={'section'} id={'contacts'}>
      <div className={'container'}>
        <Typography as={'h2'} className={s.title} variant={TypographyVariant.title}>
          Contacts
        </Typography>
        <address>
          <div className={s.wrapper}>
            <AddressesItems />
            <Map />
          </div>
          <ContactsItems />
        </address>
      </div>
    </section>
  )
}

const AddressesItems = () => (
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
)

const Map = () => (
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
)

const ContactsItems = () => (
  <ul className={s.contacts}>
    {dataContacts.map((contact, index) => (
      <li className={s.contact} key={index}>
        <Typography as={'span'} className={s.subtitle}>
          {contact.title}
        </Typography>
        <Typography
          as={'a'}
          className={'link'}
          href={contact.href}
          target={'_blank'}
          variant={TypographyVariant.subtitle1}
        >
          {contact.link}
        </Typography>
      </li>
    ))}
  </ul>
)
