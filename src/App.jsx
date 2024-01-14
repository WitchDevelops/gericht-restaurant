import React from 'react';
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </main>
  )
}

export default App