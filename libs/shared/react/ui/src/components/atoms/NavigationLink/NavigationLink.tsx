import { classnames } from '@atomic-design/shared/utils';

export interface NavigationLinkProps {
  url: string;
  external?: boolean;
  className?: string;
}

export function NavigationLink({ className, url, external = false }: NavigationLinkProps) {
  return (
    <a
      className={classnames([className, 'underline-offset-4 hover:underline hover:cursor-pointer'])}
      href={url}
      {...(external && { target: '_blank', rel: 'noreferrer noopener' })}
    >
      NavigationLink
    </a>
  );
}

export default NavigationLink;
