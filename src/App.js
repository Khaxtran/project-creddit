import React from 'react';
import './App.css';
import {Header} from './features/Header/Header';
import {Subcreddits} from './features/Subcreddits/Subcreddits';

function App() {
  return (
    <div>
      <Header />
      <div className="body">
        <aside>
          <Subcreddits />
        </aside>
        <main>
          <form>
            <input type="text"></input>
          </form>
        </main>
      </div>
      
    </div>
  );
}

export default App;
