import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Repos from './components/Repos';
import Works from './components/Works';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Repos />
        <Works />
      </main>
      <Footer />
    </div>
  );
};

export default App;
