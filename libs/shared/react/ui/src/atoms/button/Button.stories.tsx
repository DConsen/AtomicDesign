import type {Meta} from '@storybook/react';
import {Button} from './Button';

const Story: Meta<typeof Button> = {
    component: Button,
    title: 'Button',
};
export default Story;

export const Primary = {
    args: {
        label: 'Lorem Ipsum',
    },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/7Ncum8MGXNW6VFCsTR59qr/Atomic-Design?type=design&node-id=54%3A168&mode=design&t=8DNrpMOgdwSIhheu-1'
    }
  }
};
