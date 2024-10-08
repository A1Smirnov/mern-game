// src/PhaserGame.js
import React, { useEffect } from 'react';
import Phaser from 'phaser';

const PhaserGame = () => {
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: {
                preload: function() {
                    this.load.image('sky', 'https://labs.phaser.io/assets/skies/sky1.png');
                },
                create: function() {
                    this.add.image(400, 300, 'sky');
                },
                update: function() {}
            },
            parent: 'phaser-example',
        };

        const game = new Phaser.Game(config);

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div id="phaser-example" />;
};

export default PhaserGame;
