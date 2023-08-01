import { render } from '@testing-library/react';

import NavigationLink from './NavigationLink';

describe('NavigationLink', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<NavigationLink />);
        expect(baseElement).toBeTruthy();
    });
});
