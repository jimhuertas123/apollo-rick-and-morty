import { CardsRecentUsed } from './CardsRecentUsed';
import './styles/MainContent.css';

import {
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@radix-ui/react-icons';
import TableFilesContent from './TableFilesContent';
import { CardSharedFiles } from './CardSharedFiles';
interface MainContentProps {}

const MainContent = ({}: MainContentProps) => {
  return (
    <div className="main-content-container">
      <div className="search-section">
        <div className="search-input-wrapper">
          <MagnifyingGlassIcon
            aria-label="Search files"
            className="search-icon"
          />
          <input
            placeholder="Search"
            type="search"
            id="main-content-search"
            className="search-input"
          />
        </div>
      </div>
      <div className="main-content-body-wrapper">
        <div className="content-recent-used-wrapper">
          <div className="content-title">
            <h3>Recent Used</h3>
            <div className="content-recent-used-icons">
              <ArrowLeftIcon className="arrow-icon" />
              <ArrowRightIcon className="arrow-icon" />
            </div>
          </div>
          <div className="content-recent-used">
            <CardsRecentUsed
              profiles={[
                {
                  id: '1',
                  name: 'User 1',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '2',
                  name: 'User 2',
                  avatar: 'https://placehold.co/150x150',
                },
              ]}
              title="App Project"
              createdDate="20.02.2020"
            />
            <CardsRecentUsed
              profiles={[
                {
                  id: '1',
                  name: 'User 1',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '2',
                  name: 'User 2',
                  avatar: 'https://placehold.co/150x150',
                },
              ]}
              title="Project: fitbit"
              createdDate="28.02.2020"
            />
            <CardsRecentUsed
              profiles={[
                {
                  id: '1',
                  name: 'User 1',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '2',
                  name: 'User 2',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '3',
                  name: 'User 3',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '4',
                  name: 'User 4',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '5',
                  name: 'User 5',
                  avatar: 'https://placehold.co/150x150',
                },
              ]}
              title="Client Documents"
              createdDate="4.03.2020"
            />
          </div>
        </div>
        <div className="content-recent-files-wrapper">
          <div className="content-recent-files">
            <div className="content-title">
              <h3>Recent Files</h3>
              <span>View all</span>
            </div>
            <div className="recent-files-table">
              <h3>Name</h3>
              <h3>Members</h3>
              <h3>Last Modified</h3>
              <div />
            </div>
            <TableFilesContent
              key={1}
              backgroundColor="#FF9F00"
              title="Travel Landing Page"
              members={5}
              date="Mar 8, 2020"
            />
            <TableFilesContent
              key={2}
              backgroundColor="#4AC29D"
              title="True Photos"
              members={12}
              date="Mar 8, 2020"
            />
            <TableFilesContent
              key={3}
              backgroundColor="#FF6860"
              title="Dashboard Structure"
              members={10}
              date="Mar 9, 2020"
            />
            <TableFilesContent
              key={4}
              backgroundColor="#FF9F00"
              title="Character Illustration"
              members={3}
              date="Mar 10, 2020"
            />
          </div>
        </div>
        <div className="content-shared-files-wrapper">
          <div className="content-title">
            <h3>Shared whith me</h3>
            <span>View all</span>
          </div>
          <div className="cards-shared-files">
            <CardSharedFiles
              profiles={[
                {
                  id: '1',
                  name: 'User 1',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '2',
                  name: 'User 2',
                  avatar: 'https://placehold.co/150x150',
                },
              ]}
              title="Landing Page"
              createdDate="20.02.2020"
              circleColors={['#4AC29D', '#FF6860']}
            />
            <CardSharedFiles
              profiles={[
                {
                  id: '1',
                  name: 'User 1',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '2',
                  name: 'User 2',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '3',
                  name: 'User 3',
                  avatar: 'https://placehold.co/150x150',
                },
              ]}
              title="Illustration Pack"
              createdDate="20.02.2020"
              circleColors={['#4AC29D', '#FF6860', '#FF9F00']}
            />
            <CardSharedFiles
              profiles={[
                {
                  id: '1',
                  name: 'User 1',
                  avatar: 'https://placehold.co/150x150',
                },
                {
                  id: '2',
                  name: 'User 2',
                  avatar: 'https://placehold.co/150x150',
                },
              ]}
              title="CV Design"
              createdDate="20.02.2020"
              circleColors={['#4AC29D', '#FF9F00']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
