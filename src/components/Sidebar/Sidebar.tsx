import * as Dialog from '@radix-ui/react-dialog';
import './styles/Sidebar.css';

import { HamburgerIcon } from '../Icons/HamburgerIcon';
import { XIcon } from '../Icons/XIcon';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { CharacterItem } from './CharacterItem';
import type { CharactersQuery } from '../../generated/graphql';
import { LoadingStatus } from '../../shared/components/LoadingStatus';
import { useScrollBottom } from '../../hooks/useScrollBottom';
import { useMemo, useCallback } from 'react';

type SidebarProps = {
  data: CharactersQuery | undefined;
  setSelectedId: (id: number) => void;
  isLoading?: boolean;
  loadNextPage: () => void;
  isFetchingMore: boolean;
};

export const Sidebar: React.FC<SidebarProps> = ({
  data,
  setSelectedId,
  isLoading,
  isFetchingMore,
  loadNextPage,
}) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { scrollRef, triggerRef } = useScrollBottom(
    data,
    loadNextPage,
    isFetchingMore
  );

  const handleCharacterSelect = useCallback(
    (id: number) => {
      setSelectedId(id);
    },
    [setSelectedId]
  );

  const characterItems = useMemo(() => {
    return (
      data?.characters?.results?.map(character => (
        <CharacterItem
          key={`character-${character?.id}`}
          name={character?.name}
          species={character?.species}
          onClick={() => handleCharacterSelect(Number(character?.id))}
        />
      )) || []
    );
  }, [data?.characters?.results, handleCharacterSelect]);

  if (isLoading && !data?.characters?.results?.length) {
    return <LoadingStatus />;
  }

  return (
    <div className="sidebar">
      {!isMobile && (
        <div ref={scrollRef} className="sidebar-desktop-content">
          {characterItems}
          {isFetchingMore && <LoadingStatus />}
          <div ref={triggerRef} style={{ height: '10px' }} />
        </div>
      )}
      {isMobile && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="sidebar-trigger">
              <HamburgerIcon />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="sidebar-overlay" />
            <Dialog.Content className="sidebar-content">
              <div className="sidebar-header">
                <Dialog.Title>Characters</Dialog.Title>
                <Dialog.Close asChild>
                  <button className="sidebar-close">
                    <XIcon />
                  </button>
                </Dialog.Close>
              </div>
              <div className="sidebar-body">
                <div ref={scrollRef} className="sidebar-desktop-content">
                  {characterItems}
                  {isFetchingMore && <LoadingStatus />}
                  <div ref={triggerRef} style={{ height: '10px' }} />
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
};
