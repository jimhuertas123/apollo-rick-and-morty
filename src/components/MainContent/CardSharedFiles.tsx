import { CircleAvatarOnline, type Profile } from './CircleAvatarOnline';
import './styles/CardSharedFiles.css';

interface CardSharedFilesProps {
  profiles?: Profile[];
  title?: string;
  createdDate?: string;
  circleColors?: string[];
}

export const CardSharedFiles = ({
  profiles = [],
  title,
  createdDate,
  circleColors = [],
}: CardSharedFilesProps) => {
  return (
    <div className="cards-shared-files-content">
      <div className="shared-info">
        <div className="icon-share-container" />
        <CircleAvatarOnline
          className="shared-profiles-files"
          profiles={profiles}
          circleColors={circleColors}
        />
      </div>
      <h3>{title}</h3>
      <span>Created: {createdDate}</span>
    </div>
  );
};
