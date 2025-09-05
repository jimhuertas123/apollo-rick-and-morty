import { CircleAvatarOnline, type Profile } from './CircleAvatarOnline';
import './styles/CardsRecentUsed.css';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

interface CardsRecentUsedProps {
  profiles?: Profile[];
  title?: string;
  createdDate?: string;
}

export const CardsRecentUsed = ({
  profiles = [],
  title,
  createdDate,
}: CardsRecentUsedProps) => {
  return (
    <div className="cards-recent-used">
      <DotsVerticalIcon className="dots-icon" />
      <div className="shared-info-container">
        <div className="icon-container" />
        <CircleAvatarOnline className="shared-profiles" profiles={profiles} />
      </div>
      <h3>{title}</h3>
      <span>Created: {createdDate}</span>
    </div>
  );
};
