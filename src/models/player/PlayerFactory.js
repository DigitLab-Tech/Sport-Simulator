import Player from './Player';
import {getRandomInRange} from '../../helpers/Random';

class PlayerFactory{
    createRandom(min, max){
        return new Player(getRandomInRange(min, max));
    }
}

export default PlayerFactory;
