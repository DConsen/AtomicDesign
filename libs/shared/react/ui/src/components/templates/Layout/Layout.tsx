import { classnames } from '@atomic-design/shared/utils';
import { ReactNode } from 'react';
import { Header, HeaderProps } from '../../organisms';

export interface LayoutProps {
  headerProps: HeaderProps;
  footer: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Layout({ headerProps, children, footer, className }: LayoutProps) {
  return (
    <div className={classnames([className, 'min-h-screen w-full grid grid-rows-layout gap-y-8'])}>
      <Header {...headerProps} />
      <div className="w-full flex justify-center">
        <main className="w-full max-w-7xl">{children}</main>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}

export default Layout;
