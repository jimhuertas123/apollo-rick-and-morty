import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://rickandmortyapi.com/graphql',
  documents: 'src/**/*.{ts,tsx}',
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        avoidOptionals: true,
        maybeValue: 'T',
        inputMaybeValue: 'T | undefined',
      },
    },
  },
};

export default config;
