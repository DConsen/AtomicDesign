import type { Meta } from '@storybook/react';
import { Header } from './Header';

const Story: Meta<typeof Header> = {
  component: Header,
  title: 'Design System/Organisms/Header',
};
export default Story;

export const Primary = {
  args: {
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7Ncum8MGXNW6VFCsTR59qr/Atomic-Design?type=design&node-id=38%3A346&mode=design&t=c89PVCKWvTgy6u4o-1',
    },
  },
};
