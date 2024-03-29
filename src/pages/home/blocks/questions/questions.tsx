import { FC, ReactNode } from 'react'

import { v1 } from 'uuid'

import s from './questions.module.scss'

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  Typography,
} from '@/components'

type QuestionType = {
  id: string
  title: string
  content: ReactNode
}

const questions: QuestionType[] = [
  {
    id: v1(),
    title: 'Is it possible to make small contributions?',
    content: (
      <p>
        It is a small contribution that speaks of a big heart. Don’t think about the fact that you
        can’t do much, but just imagine how much food a kitten needs, and you will understand that
        what is a matter of dinner for some is a matter of life for others.
      </p>
    ),
  },
  {
    id: v1(),
    title: 'What can I donate?',
    content: (
      <p>
        We accept any donations and send them directly to those who need it. We accept large
        donations (money, vehicles, goods and real estate). You can also donate any amount you can
        and much more.
      </p>
    ),
  },
  {
    id: v1(),
    title: 'I have a wholesale batch of shoes in my warehouse. Can I donate it to the fund?',
    content: (
      <p>
        Yes, sure! This will be a great help for people in need. Moreover, this will be mutual
        assistance: we will be able to provide you with a certificate that will allow you to reduce
        taxes on the donation amount.
      </p>
    ),
  },
  {
    id: v1(),
    title: 'How can I reduce taxes on donation amounts?',
    content: (
      <>
        <p>
          A. Call us and get a full consultation from the accountant about the possibility of
          writing off tax payments on the donation amount.
        </p>
        <p>
          B. Come to our office at 64–05 Yellowstone Blvd Forest Hills 11375 Queens. After making a
          charitable contribution, you will receive official documentation of the donation amount
          and will be able to use these documents on your tax return.
        </p>
      </>
    ),
  },
  {
    id: v1(),
    title: 'There is no my question here. How can I find the answer?',
    content: (
      <p>
        Please write your question to{' '}
        <a href={'mailto:online@bfkh.ru'} target={'_blank'} rel="noreferrer">
          online@bfkh.ru
        </a>
      </p>
    ),
  },
  {
    id: v1(),
    title: 'What other help does the foundation need?',
    content: (
      <p>
        Become a member of our team, wear our merch, subscribe to our social networks, be involved.
        This will be a great help for our foundation.
      </p>
    ),
  },
]

export const Questions: FC = () => {
  const leftCount = Math.floor(questions.length / 2)
  const leftItems = [...questions].splice(0, leftCount)
  const rightItems = [...questions].splice(leftCount)

  return (
    <section className={'section'}>
      <div className="container">
        <div className={'section__wrapper'}>
          <Typography as={'h2'} variant={'title'}>
            Frequently asked questions
          </Typography>
          <div className={s.items}>
            <AccordionList items={leftItems} />
            <AccordionList items={rightItems} />
          </div>
        </div>
      </div>
    </section>
  )
}

const AccordionList: FC<{ items: QuestionType[] }> = ({ items }) => {
  return (
    <Accordion className={s.list} type={'multiple'}>
      {items.map(item => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionHeader> {item.title} </AccordionHeader>
          <AccordionContent> {item.content} </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
