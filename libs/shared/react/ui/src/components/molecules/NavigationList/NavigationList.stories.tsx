import type { Meta } from '@storybook/react';
import { NavigationList } from './NavigationList';

const Story: Meta<typeof NavigationList> = {
  component: NavigationList,
  title: 'Design System/Molecules/NavigationList',
};
export default Story;

export const Primary = {
  args: {
    mode: 'HORIZONTAL',
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
  argTypes: {
    mode: {
      options: ['HORIZONTAL', 'VERTICAL'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7Ncum8MGXNW6VFCsTR59qr/Atomic-Design?type=design&node-id=337%3A29&mode=design&t=c89PVCKWvTgy6u4o-1',
    },
  },
};
