// src/PhaserGame.js
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const PhaserGame = () => {
    const gameContainerRef = useRef(null);

    useEffect(() => {
        // Конфигурация Phaser
        const config = {
            type: Phaser.AUTO,
            width: 800, // Ширина экрана
            height: 600, // Высота экрана
            parent: gameContainerRef.current,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 }, // Отключаем гравитацию для 2D игры
                },
            },
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        // Создаем игру при монтировании компонента
        const game = new Phaser.Game(config);

        // Уничтожаем игру при размонтировании компонента
        return () => {
            game.destroy(true);
        };
    }, []);

    function preload() {
        // Загружаем карту (фон) и персонажа
        this.load.image('map', 'testmap.jpg'); // Карта
        this.load.image('character', 'character.png'); // Персонаж
    }

    function create() {
        // Добавляем карту на фон
        this.add.image(400, 300, 'map');

        // Получаем размеры экрана
        const { width, height } = this.scale;

        // Создаем персонажа и помещаем его в центр экрана
        const character = this.physics.add.sprite(width / 2, height / 2, 'character');

        // Опционально: можно настроить физику персонажа (скорость, перемещение и т.д.)
        character.setCollideWorldBounds(true); // Чтобы персонаж не уходил за границы экрана
    }

    function update() {
        // Логика обновления кадров
    }

    return (
        <div>
            <div ref={gameContainerRef} />
        </div>
    );
};

export default PhaserGame;
