import alt from 'alt';
import * as game from 'natives';
import config from '../cfg/config.js';

alt.on('connectionComplete', () => {
    for (const [key, value] of Object.entries(config)) {
        for (const [key2, value2] of Object.entries(value)) {
            for (var i = 0; i < value2.length; i++) {
                if (value2[i].enabled) {
                    switch (key2) {
                        case 'locations':
                            alt.requestIpl(value2[i].name);
                            break;
                        default: 
                            game.activateInteriorEntitySet(value.interiorid, value2[i].name);
                            break;
                    }
                } else {
                    switch (key2) {
                        case 'locations':
                            break;
                        default: 
                            game.deactivateInteriorEntitySet(value.interiorid, value2[i].name);
                            break;
                    } 
                }
            }
        }
    }
});
