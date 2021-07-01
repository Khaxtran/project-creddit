import React from 'react';
import './App.css';
import {Header} from './features/Header/Header';
import {Subcreddits} from './features/Subcreddits/Subcreddits';
import {Home} from './features/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <aside>
          <Subcreddits />
        </aside>
        <main>
          <Home />
        </main>
      </div>
      
    </div>
  );
}

export default App;
