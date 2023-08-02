import type { Meta } from '@storybook/react';
import { Layout } from './Layout';
import { Placeholder } from '../../atoms';

const Story: Meta<typeof Layout> = {
  component: Layout,
  title: 'Design System/Templates/Layout',
};
export default Story;

export const Primary = {
  args: {
    header: <Placeholder className="h-40" />,
    main: <Placeholder className="h-full" />,
    footer: <Placeholder className="h-40" />,
  },
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};
