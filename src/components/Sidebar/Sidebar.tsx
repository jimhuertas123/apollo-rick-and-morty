import * as Dialog from '@radix-ui/react-dialog';
import './styles/Sidebar.css';

import { HamburgerIcon } from '../Icons/HamburgerIcon';
import { XIcon } from '../Icons/XIcon';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { CharacterItem } from './CharacterItem';
import type { CharactersQuery } from '../../generated/graphql';
import { LoadingStatus } from '../../shared/components/LoadingStatus';

type SidebarProps = {
  data: CharactersQuery | undefined;
  setSelectedId: (id: number) => void;
  isLoading?: boolean;
};

export const Sidebar: React.FC<SidebarProps> = ({
  data,
  setSelectedId,
  isLoading,
}) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const handleCharacterSelect = (id: number) => {
    setSelectedId(id);
  };

  // const handleLoadMore = () => {
  //   if (onLoadMore) {
  //     onLoadMore();
  //   }
  // };

  // const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
  //   const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     handleLoadMore();
  //   }
  // };

  if (isLoading) {
    return <LoadingStatus />;
  }

  return (
    <div>
      {!isMobile && (
        <div className="sidebar-desktop-content">
          {data?.characters.results.map(character => (
            <CharacterItem
              key={character.id}
              name={character.name}
              species={character.species}
              onClick={() => handleCharacterSelect(Number(character.id))}
            />
          ))}
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
                <div className="sidebar-desktop-content">
                  {data?.characters.results.map(character => (
                    <CharacterItem
                      key={character.id}
                      name={character.name}
                      species={character.species}
                      onClick={() =>
                        handleCharacterSelect(Number(character.id))
                      }
                    />
                  ))}
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
};
