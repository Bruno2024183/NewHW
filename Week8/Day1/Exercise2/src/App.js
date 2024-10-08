import React from 'react';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div className="App">
      {/* Render the user's first and last name */}
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>

      {/* Pass favAnimals array to the UserFavoriteAnimals component */}
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>
  );
}

export default App;