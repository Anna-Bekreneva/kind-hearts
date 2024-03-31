import { ComponentPropsWithoutRef, FC } from 'react'

type Props = {
  src: string
  avif: string
  webp: string
  alt: string
}

export type PicturePropsType = Props & Omit<ComponentPropsWithoutRef<'img'>, keyof Props>
export const Picture: FC<PicturePropsType> = ({ src, avif, webp, className, alt, ...rest }) => {
  return (
    <picture>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img src={src} alt={alt} {...rest} />
    </picture>
  )
}
