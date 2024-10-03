import React from 'react';
import './App.css';
import Header from './Header';
import Card from './Card';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header />
      <section className="container my-5">
        <div className="row">
          <Card
            icon="fa-building"
            title="About the Company"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            icon="fa-globe"
            title="Our Values"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            icon="fa-university"
            title="Our Mission"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default App;