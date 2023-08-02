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
    headerProps: {
      logo: {
        src: 'https://picsum.photos/300/200.webp',
        alt: 'Random',
      },
      navigation: {
        links: [
          {
            url: '',
          },
          {
            url: '',
          },
          {
            url: '',
          },
        ],
      },
    },
    footer: <Placeholder className="h-40" />,
    children: <Placeholder className="h-full" />,
  },
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};
