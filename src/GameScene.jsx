import React, { useEffect } from 'react';
import Phaser from 'phaser';

const GameScene = () => {
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        const game = new Phaser.Game(config);

        function preload() {
            // Загрузка спрайтов и ресурсов
        }

        function create() {
            // Настройка игры (например, создание персонажей и врагов)
        }

        function update() {
            // Логика игры и обновление кадров
        }

        return () => {
            game.destroy(true); // Очистка при размонтировании компонента
        };
    }, []);

    return <div id="game-container"></div>;
};

export default GameScene;
