import * as Dialog from '@radix-ui/react-dialog';
import './styles/Sidebar.css';

import { HamburgerIcon } from '../Icons/HamburgerIcon';
import { XIcon } from '../Icons/XIcon';
import { useMediaQuery } from '../../hooks/useMediaQuery';
type SidebarProps = {
  children: React.ReactNode;
};

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div>
      {!isMobile && <div className="sidebar-desktop-content">{children}</div>}
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
              <div className="sidebar-body">{children}</div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
};
