import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="main_wrapper">
	      <div className="p1"></div>
	      <CharacterEditor />
      </div>
      <Footer />
    </>
  );
}

export default App;
