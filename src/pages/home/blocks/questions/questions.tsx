import { ReactNode, memo } from 'react'

import { Accordion, AccordionItem, Typography } from '@/components'
import { v1 } from 'uuid'

import s from './questions.module.scss'

type QuestionType = {
  content: ReactNode
  id: string
  title: string
}

const questions: QuestionType[] = [
  {
    content: (
      <p>
        It is a small contribution that speaks of a big heart. Don’t think about the fact that you
        can’t do much, but just imagine how much food a kitten needs, and you will understand that
        what is a matter of dinner for some is a matter of life for others.
      </p>
    ),
    id: v1(),
    title: 'Is it possible to make small contributions?',
  },
  {
    content: (
      <p>
        We accept any donations and send them directly to those who need it. We accept large
        donations (money, vehicles, goods and real estate). You can also donate any amount you can
        and much more.
      </p>
    ),
    id: v1(),
    title: 'What can I donate?',
  },
  {
    content: (
      <p>
        Yes, sure! This will be a great help for people in need. Moreover, this will be mutual
        assistance: we will be able to provide you with a certificate that will allow you to reduce
        taxes on the donation amount.
      </p>
    ),
    id: v1(),
    title: 'I have a wholesale batch of shoes in my warehouse. Can I donate it to the fund?',
  },
  {
    content: (
      <>
        <p>
          A. Call us and get a full consultation from the accountant about the possibility
          of&nbsp;writing off tax payments on the donation amount.
        </p>
        <p>
          B. Come to our office at 77 Bowery, New York, NY&nbsp;10 002, 8th&nbsp;floor. After making
          a charitable contribution, you will receive official documentation of the donation amount
          and will be able to use these documents on your tax return.
        </p>
      </>
    ),
    id: v1(),
    title: 'How can I reduce taxes on donation amounts?',
  },
  {
    content: (
      <p>
        Please write your question to{' '}
        <a href={'mailto:khertscharity@gmail.com'} rel={'noreferrer'} target={'_blank'}>
          khertscharity@gmail.com
        </a>
      </p>
    ),
    id: v1(),
    title: 'There is no my question here. How can I find the answer?',
  },
  {
    content: (
      <p>
        Become a member of our team, wear our merch, subscribe to our social networks, be involved.
        This will be a great help for our foundation.
      </p>
    ),
    id: v1(),
    title: 'What other help does the foundation need?',
  },
]

export const Questions = () => {
  const leftCount = Math.floor(questions.length / 2)
  const leftItems = [...questions].splice(0, leftCount)
  const rightItems = [...questions].splice(leftCount)

  return (
    <section className={'section'}>
      <div className={'container'}>
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

type AccordionListPropsType = {
  items: QuestionType[]
}

const AccordionList = memo(({ items }: AccordionListPropsType) => {
  return (
    <Accordion className={s.list} type={'multiple'}>
      {items.map(item => (
        <AccordionItem key={item.id} title={item.title} value={item.id}>
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  )
})
