import Division from './Division';
import TeamFactory from '../team/TeamFactory'

class DivisionFactory{
    createRandomHockey(name){
      const nbTeam = 8;
      const teamNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

      let division = new Division(name);
      let teamFactory = new TeamFactory();

      for (let i = 0; i < nbTeam; i++){
        division.addTeam(teamFactory.createRandomHockey(teamNames[i]));
      }

      return division;
    }

}

export default DivisionFactory;
