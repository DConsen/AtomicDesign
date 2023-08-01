import type { Meta } from '@storybook/react';
import { NavigationLink } from './NavigationLink';

const Story: Meta<typeof NavigationLink> = {
    component: NavigationLink,
    title: 'Design System/Atoms/NavigationLink',
};
export default Story;

export const Primary = {
    args: {},
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/7Ncum8MGXNW6VFCsTR59qr/Atomic-Design?type=design&node-id=38%3A402&mode=design&t=c89PVCKWvTgy6u4o-1',
        },
    },
};
