import { classnames } from '@atomic-design/shared/utils';
import { ReactNode } from 'react';

export interface LayoutProps {
  header: ReactNode;
  main: ReactNode;
  footer: ReactNode;
  className?: string;
}

export function Layout({ header, main, footer, className }: LayoutProps) {
  return (
    <div className={classnames([className, 'min-h-screen w-full grid grid-rows-layout gap-y-8'])}>
      <header>{header}</header>
      <div className="w-full flex justify-center">
        <main className="w-full max-w-7xl">{main}</main>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}

export default Layout;
