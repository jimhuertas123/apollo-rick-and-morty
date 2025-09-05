// import { useState } from "react";
import { Sidebar } from './components/Sidebar/Sidebar';
import './RickAndMortyApp.css';

export const RickAndMortyApp = () => {
  return (
    <div className="rick-and-morty-app">
      {/* header */}
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <div className="app-content">
        <aside className="sidebar-container">
          <Sidebar>
            <p>Character 1</p>
            <p>Character 2</p>
            <p>Character 3</p>
          </Sidebar>
        </aside>

        <main className="main-container">asdasd</main>
      </div>
    </div>
  );
};
