import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { AliasOptions, mergeConfig } from 'vite';

function mapTsconfigCompilerPathsToAlias() {
    // eslint-disable-next-line
    const { paths } = require('../../../../../tsconfig.base.json').compilerOptions;
    const aliases: AliasOptions = {};
    Object.keys(paths).forEach((item) => {
        const key = item.replace('/*', '');
        const value = path.resolve(__dirname, '../../../../../' + paths[item][0].replace('/*', '').replace('*', ''));
        aliases[key] = value;
    });
    return aliases;
}

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-designs'],
    staticDirs: ['../assets'],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: '',
            },
        },
    },
    async viteFinal(config) {
        // Merge custom configuration into the default config
        return mergeConfig(config, {
            resolve: {
                alias: {
                    ...mapTsconfigCompilerPathsToAlias(),
                },
            },
        });
    },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
