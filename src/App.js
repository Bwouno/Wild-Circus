import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Artist from './components/Artist/Artist';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Artist />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
