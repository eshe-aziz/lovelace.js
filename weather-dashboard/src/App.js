// import React from 'react';
import Weather from './Weather';

function Header() {
  return (
    <header>
      <h1>Weather Dashboard</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
    </div>
  );
}

export default App;
