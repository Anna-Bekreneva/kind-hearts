import s from './table-contents.module.scss'
import {Typography} from "@/components";
import {TypographyVariant} from "@/common";

const linkList = [
  {
    label: '1. Interpretation and\u00A0Definitions',
    href: '#interpretation'
  },
  {
    label: '2. Collecting and Using Your Personal Data',
    href: '#collecting'
  },
  {
    label: '3. Children’s\u00A0Privacy',
    href: '#childrens'
  },
  {
    label: '4. Links to\u00A0Other Websites',
    href: '#links'
  },
  {
    label: '5. Changes to\u00A0this Privacy Policy',
    href: '#changes'
  },
  {
    label: '#contacts',
    href: '6. Contact Us'
  }
]

export const TableContents = () => {
  return (
    <nav>
      <Typography as={'h3'} variant={TypographyVariant.subtitle1}>Table of&nbsp;Contents</Typography>
      <ul>
        { linkList.map((link) => <li key={link.href}> <Typography as={'a'} hreef={link.href}> { link.label } </Typography> </li>) }
      </ul>
    </nav>
  )
}