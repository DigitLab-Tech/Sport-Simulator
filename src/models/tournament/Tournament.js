class Tournament{
  constructor(){
    this.divisions = [];
    this.data = {}
  }

  addDivision(division){
    this.divisions.push(division);
  }

  addWin(division, team){
    if(this.data[division.name][team.name].win){
          this.data[division.name][team.name].win++
    }else{
      this.data[division.name][team.name].win = 1;
    }
  }

  addLost(division, team){
    if(this.data[division.name][team.name].win){
          this.data[division.name][team.name].win++
    }else{
      this.data[division.name][team.name].win = 1;
    }
  }

  groupTeam(){
    
  }
}

export default Tournament;
