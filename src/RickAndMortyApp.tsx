import { CharacterDetails } from './components/MainContent/CharacterDetails';
import { CharacterItem } from './components/Sidebar/CharacterItem';
import { Sidebar } from './components/Sidebar/Sidebar';
import './RickAndMortyApp.css';
import { LoadingStatus } from './shared/components/LoadingSVG';

const fakeCharacters = [
  { id: 1, name: 'Luke Skywalker', species: 'Human from Tatooine' },
  { id: 2, name: 'Rick Sanchez', species: 'Human from Earth C-137' },
  { id: 3, name: 'Morty Smith', species: 'Human from Earth C-137' },
  { id: 4, name: 'Summer Smith', species: 'Human from Earth C-137' },
  { id: 5, name: 'Beth Smith', species: 'Human from Earth C-137' },
  { id: 6, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 7, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 8, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 9, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 10, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 11, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 12, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 13, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 14, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 15, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 16, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 17, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 18, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 19, name: 'Jerry Smith', species: 'Human from Earth C-137' },
  { id: 20, name: 'Jerry Smith', species: 'Human from Earth C-137' },
];

const fakeCharacterData = {
  characterId: 1,
  details: {
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
    gender: 'Male',
    location: {
      name: 'Citadel of Ricks',
    },
    origin: {
      name: 'Earth (C-137)',
    },
    episode: ['S01E01', 'S01E02', 'S01E03', 'S01E04', 'S01E05'],
  },
};

export const RickAndMortyApp = () => {
  return (
    <div className="rick-and-morty-app">
      {/* header */}
      <header className="app-header">
        <h1>Ravn Star Wars Registry</h1>
      </header>
      <div className="app-content">
        <aside className="sidebar-container">
          <Sidebar>
            {fakeCharacters.map(character => (
              <CharacterItem
                key={character.id}
                name={character.name}
                species={character.species}
              />
            ))}
            <LoadingStatus />
          </Sidebar>
        </aside>

        <main className="main-container">
          <CharacterDetails
            characterId={fakeCharacterData.characterId}
            details={fakeCharacterData.details}
          />
        </main>
      </div>
    </div>
  );
};
