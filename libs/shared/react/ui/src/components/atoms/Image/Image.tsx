import { classnames } from '@atomic-design/shared/utils';
import { ImgHTMLAttributes } from 'react';

export interface ImageProps {
  className?: string;
}

export function Image({ className, ...rest }: ImageProps & ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={classnames([className])} {...rest} />;
}

export default Image;
