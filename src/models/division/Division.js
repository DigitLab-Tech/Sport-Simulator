class Division{
  constructor(name = 'Default'){
    this.name = name;
    this.teams = [];
  }

  addTeam(team){
    this.teams.push(team);
  }
}

export default Division;
