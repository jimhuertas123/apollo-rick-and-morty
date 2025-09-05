import { useState } from 'react';
import { CharacterDetails } from './components/MainContent/CharacterDetails';
import { Sidebar } from './components/Sidebar/Sidebar';
import './RickAndMortyApp.css';
import { useCharactersQuery, type Character } from './generated/graphql';
import { ErrorStatus } from './shared/components/ErrorStatus';
import { NetworkStatus } from '@apollo/client';

export const RickAndMortyApp = () => {
  const [selectedId, setSelectedId] = useState<number | null | undefined>(null);

  const { data, fetchMore, loading, networkStatus, error } = useCharactersQuery(
    {
      variables: { page: 1 },
      notifyOnNetworkStatusChange: true,
    }
  );

  const isFetchingMore = networkStatus === NetworkStatus.fetchMore;

  const loadNextPage = () => {
    if (data?.characters?.info?.next && !isFetchingMore) {
      fetchMore({
        variables: { page: data.characters.info.next },
      });
    }
  };
  return (
    <div className="rick-and-morty-app">
      {/* header */}
      <header className="app-header">
        <h1>Ravn Star Wars Registry</h1>
      </header>

      {/* sidebat */}
      <div className="app-content">
        <aside className="sidebar-container">
          {error && <ErrorStatus />}
          {data && (
            <Sidebar
              isLoading={loading}
              setSelectedId={setSelectedId}
              data={data}
              loadNextPage={loadNextPage}
              isFetchingMore={isFetchingMore}
            />
          )}
        </aside>

        {/* main content */}
        <main className="main-container">
          <CharacterDetails
            characterId={selectedId ?? undefined}
            details={
              (data?.characters?.results?.find(
                character => Number(character?.id) === selectedId
              ) as Character) || undefined
            }
          />
        </main>
      </div>
    </div>
  );
};
