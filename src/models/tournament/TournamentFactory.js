import Tournament from './Tournament';
import DivisionFactory from '../division/DivisionFactory';

class TournamentFactory{
  createRandomHockeySeries(){
    const divisionNames = ['East', 'West'];

    let tournament = new Tournament();
    let divisionFactory = new DivisionFactory();

    divisionNames.forEach(element => {
      tournament.addDivision(divisionFactory.createRandomHockey(element));
    });

    return tournament;
  }
}

export default TournamentFactory;
