import './styles/CircleAvatarOnline.css';
export interface Profile {
  id: string;
  name: string;
  avatar?: string;
}

interface CircleAvatarOnlineProps {
  profiles?: Profile[];
  circleColors?: string[];
  className?: string;
}

export const CircleAvatarOnline = ({
  profiles = [],
  circleColors = [],
  className = '',
}: CircleAvatarOnlineProps) => {
  const maxVisible = 3;
  const visibleProfiles = profiles.slice(0, maxVisible - 1);
  const remainingCount = profiles.length - (maxVisible - 1);
  const hasMore = profiles.length > maxVisible;

  console.log(circleColors);

  return (
    <div className={className}>
      {visibleProfiles.map((profile, index) => (
        <div
          key={profile.id}
          className="profile-icon"
          title={profile.name}
          style={{
            border: `1px solid ${circleColors.length > index ? circleColors[index] : '#BEC0C8'}`,
          }}
        />
      ))}
      {hasMore ? (
        <div className="profile-icon profile-count">
          <span className="profile-count-text">+{remainingCount}</span>
        </div>
      ) : (
        profiles.length === maxVisible && (
          <div
            className="profile-icon"
            title={profiles[maxVisible - 1].name}
            style={{
              border: `1px solid ${circleColors.length > maxVisible - 1 ? circleColors[maxVisible - 1] : '#BEC0C8'}`,
            }}
          />
        )
      )}
    </div>
  );
};
