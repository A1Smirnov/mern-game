// src/App.js
import React from 'react';
import PhaserGame from './PhaserGame'; // Game Graphic Component
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>React with Phaser</h1>
            {/* Component with game */}
            <PhaserGame />
        </div>
    );
}

export default App;
