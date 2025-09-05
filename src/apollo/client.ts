import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: [],
            merge(existing, incoming) {
              if (!existing) {
                return incoming;
              }
              return {
                ...incoming,
                results: [
                  ...(existing.results || []),
                  ...(incoming.results || []),
                ],
              };
            },
          },
        },
      },
    },
  }),
});
