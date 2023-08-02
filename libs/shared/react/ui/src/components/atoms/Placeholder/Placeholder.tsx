import { classnames } from '@atomic-design/shared/utils';

export interface PlaceholderProps {
  className?: string;
}

export function Placeholder({ className }: PlaceholderProps) {
  return (
    <div className={classnames(['rounded-lg border-4 border-dashed border-neutral-400 bg-neutral-100', className])} />
  );
}

export default Placeholder;
