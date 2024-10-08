import React from 'react';
import GameScene from './GameScene';

function BattleScreen({ setInBattle }) {
    return (
        <div className="battle-screen">
            <h2>Бой!</h2>
            <GameScene />
            <button onClick={() => setInBattle(false)}>Вернуться в меню</button>
        </div>
    );
}

export default BattleScreen;
