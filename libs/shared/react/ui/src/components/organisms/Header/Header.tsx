import { classnames } from '@atomic-design/shared/utils';
import { Image, ImageProps } from '../../atoms';
import { NavigationList, NavigationListProps } from '../../molecules';
import { ImgHTMLAttributes } from 'react';

export interface HeaderProps {
  logo: ImageProps & ImgHTMLAttributes<HTMLImageElement>;
  navigation: NavigationListProps;
  className?: string;
}

export function Header({ logo, navigation, className }: HeaderProps) {
  return (
    <div className={classnames([className, 'w-full h-20 bg-primary px-4 py-2 flex justify-center items-center'])}>
      <div className="w-full h-full max-w-7xl flex justify-between items-center">
        <Image {...logo} className="h-full w-40 object-cover" />
        <NavigationList {...navigation} />
      </div>
    </div>
  );
}

export default Header;
