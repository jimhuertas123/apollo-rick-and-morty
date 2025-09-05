import { useEffect, useState } from 'react';
import type { Character } from '../../generated/graphql';
import './styles/CharacterDetails.css';
type CharacterDetailsProps = {
  characterId?: number;
  details?: NonNullable<Character>;
};

export const CharacterDetails = ({
  characterId,
  details,
}: CharacterDetailsProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [details?.id]);

  return (
    <>
      {details === undefined && (
        <h1 className="character-details-placeholder">Select a Character</h1>
      )}
      {details !== undefined && (
        <div className="character-details-container">
          <h2>General Information</h2>
          <table className="character-details-table" title="Character Details">
            <tbody id={`character-${characterId}`}>
              <tr className="image-row">
                <td>
                  <strong>Image</strong>
                </td>
                <td>
                  <img
                    onLoad={() => setImageLoaded(true)}
                    src={details.image}
                    alt={details.name}
                    className={`character-image ${imageLoaded ? 'loaded' : 'loading'}`}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Name</strong>
                </td>
                <td>{details.name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Species</strong>
                </td>
                <td>{details.species}</td>
              </tr>
              <tr>
                <td>
                  <strong>Status</strong>
                </td>
                <td>{details.status}</td>
              </tr>
              <tr>
                <td>
                  <strong>Gender</strong>
                </td>
                <td>{details.gender}</td>
              </tr>
              <tr>
                <td>
                  <strong>Location</strong>
                </td>
                <td>{details.location.name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Origin</strong>
                </td>
                <td>{details.origin.name}</td>
              </tr>
            </tbody>
          </table>
          <h2>Episodes</h2>
          <table className="character-details-table">
            <tbody>
              {details.episode.slice(0, 5).map(episode => (
                <tr key={episode?.id}>
                  <td>{`${episode?.episode}: ${episode?.name}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
