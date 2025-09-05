import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RickAndMortyApp } from './RickAndMortyApp.tsx';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RickAndMortyApp />
    </ApolloProvider>
  </StrictMode>
);
