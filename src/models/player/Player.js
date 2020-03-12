class Player{
    constructor(rating = 0.5){
        this.rating = rating;
    }

    getRating(){
      return parseFloat(this.rating);
    }
}

export default Player;
