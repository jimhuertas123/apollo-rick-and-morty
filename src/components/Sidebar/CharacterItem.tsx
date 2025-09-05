import type { Character } from '../../types/Characters';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';
import './styles/CharacterItem.css';

export const CharacterItem = ({
  name,
  species,
}: Pick<Character, 'name' | 'species'>) => {
  return (
    <button className="character-item">
      <div className="character-info">
        <h3>{name}</h3>
        <p>{species}</p>
      </div>
      <div className="arrow-icon">
        <ArrowRightIcon />
      </div>
    </button>
  );
};
