import React from 'react';

function Menu({ setInBattle }) {
    return (
        <div className="menu">
            <h1>Главное меню</h1>
            <button onClick={() => setInBattle(true)}>Начать бой</button>
            <button onClick={() => alert('Инвентарь (в разработке)')}>Инвентарь</button>
        </div>
    );
}

export default Menu;
