import './index.css';

export const parameters = {
    viewport: {
        viewports: {
            desktop_1: {
                name: 'Desktop #1',
                styles: {
                    width: '1920px',
                    height: '1080px',
                },
                type: 'desktop',
            },
            desktop_2: {
                name: 'Desktop #2',
                styles: {
                    width: '1366px',
                    height: '768px',
                },
                type: 'desktop',
            },
            desktop_3: {
                name: 'Desktop #3',
                styles: {
                    width: '1536px',
                    height: '864px',
                },
                type: 'desktop',
            },
            mobile_large: {
                name: 'Mobile (large)',
                styles: {
                    width: '390px',
                    height: '844px',
                },
                type: 'mobile',
            },
            mobile_small: {
                name: 'Mobile (small)',
                styles: {
                    width: '375px',
                    height: '667px',
                },
                type: 'mobile',
            },
            tablet: {
                name: 'Tablet (portait)',
                styles: {
                    width: '768px',
                    height: '1024px',
                },
                type: 'tablet',
            },
            tablet_landscape: {
                name: 'Tablet (landscape)',
                styles: {
                    width: '1024px',
                    height: '768px',
                },
                type: 'tablet',
            },
        },
    },
};
