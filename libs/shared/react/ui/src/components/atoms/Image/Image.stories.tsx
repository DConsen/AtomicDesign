import type { Meta } from '@storybook/react';
import { Image } from './Image';

const Story: Meta<typeof Image> = {
  component: Image,
  title: 'Design System/Atoms/Image',
};
export default Story;

export const Primary = {
  args: {
    src: 'https://picsum.photos/300/200.webp',
    alt: 'Random',
  },
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};
