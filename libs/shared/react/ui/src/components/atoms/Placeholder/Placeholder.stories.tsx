import type { Meta } from '@storybook/react';
import { Placeholder } from './Placeholder';

const Story: Meta<typeof Placeholder> = {
  component: Placeholder,
  title: 'Design System/Atoms/Placeholder',
};
export default Story;

export const Primary = {
  args: {
    className: 'h-32',
  },
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};
