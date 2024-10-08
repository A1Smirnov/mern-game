import React, { useState } from 'react';
import Menu from './components/Menu';
import BattleScreen from './components/BattleScreen';
import './styles.css';

function App() {
    const [inBattle, setInBattle] = useState(false);

    return (
        <div className="app">
            {inBattle ? (
                <BattleScreen setInBattle={setInBattle} />
            ) : (
                <Menu setInBattle={setInBattle} />
            )}
        </div>
    );
}

export default App;
