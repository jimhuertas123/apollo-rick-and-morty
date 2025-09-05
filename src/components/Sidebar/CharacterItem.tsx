import type { Character } from '../../generated/graphql';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';
import './styles/CharacterItem.css';

export const CharacterItem = ({
  name,
  species,
  onClick,
  className,
}: Pick<Character, 'name' | 'species'> &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className="character-item-container">
      <button
        type="button"
        className={`character-item ${className}`}
        onClick={onClick}
      >
        <div className="character-info">
          <h3>{name}</h3>
          <p>{species}</p>
        </div>
        <div className="arrow-icon">
          <ArrowRightIcon />
        </div>
      </button>
    </div>
  );
};
