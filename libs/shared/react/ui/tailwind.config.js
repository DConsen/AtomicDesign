const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { colorTokens } = require('./constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist: [
    {
      pattern: /bg/,
    },
  ],
  theme: {
    fontFamily: {
      display: ['Oswald'],
      body: ['Sentient'],
    },
    extend: {
      colors: {
        ...colorTokens,
      },
      gridTemplateColumns: {
        layout: 'auto 1fr auto',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};
