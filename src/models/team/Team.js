class Team{
  constructor(name = 'Default'){
    this.name = name;
    this.players = [];
    this.rating = 0;
  }

  addPlayer(player){
    this.players.push(player);
  }

  getRating(){
    if(this.rating === 0){
      let totalPlayerRating = 0;
      this.players.forEach(element => {
        totalPlayerRating += element.getRating();
      });
      this.rating = totalPlayerRating / this.players.length;
    }
    return this.rating;
  }
}

export default Team;
