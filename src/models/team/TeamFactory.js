import Team from './Team';
import PlayerFactory from '../player/PlayerFactory'

class TeamFactory{
  createRandomHockey(name = ''){
    const nbPlayer = 21;

    let team = new Team(name);
    let playerFactory = new PlayerFactory();

    for (let i = 0; i < nbPlayer; i++){
      team.addPlayer(playerFactory.createRandom(0.15,1));
    }
    
    team.getRating();
    return team;
  }
}

export default TeamFactory;
