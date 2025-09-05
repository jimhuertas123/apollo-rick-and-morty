import './styles/CharacterDetails.css';
interface CharacterDetailsProps {
  characterId: number;
  details: {
    image: string;
    name: string;
    species: string;
    status: string;
    gender: string;
    location: {
      name: string;
    };
    origin: {
      name: string;
    };
    episode: string[];
  };
}

export const CharacterDetails = ({
  characterId,
  details,
}: CharacterDetailsProps) => {
  return (
    <div className="character-details-container">
      <h2>General Information</h2>
      <table className="character-details-table" title="Character Details">
        <tbody id={`character-${characterId}`}>
          <tr className="image-row">
            <td>
              <strong>Image</strong>
            </td>
            <td>
              <img src={details.image} alt={details.name} />
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
          {details.episode.slice(0, 5).map((episode, index) => (
            <tr key={index}>
              <td>{episode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
