import { classnames } from '@atomic-design/shared/utils';
import { NavigationLink, NavigationLinkProps } from '../../atoms';

export interface NavigationListProps {
  links: NavigationLinkProps[];
  mode?: 'HORIZONTAL' | 'VERTICAL';
  className?: string;
}

export function NavigationList({ links, mode = 'HORIZONTAL', className }: NavigationListProps) {
  return (
    <div className={classnames([className, 'flex', mode === 'HORIZONTAL' ? 'flex-row gap-x-8' : 'flex-col gap-y-2'])}>
      <>
        {links?.map((link) => (
          <NavigationLink {...link} />
        ))}
      </>
    </div>
  );
}

export default NavigationList;
