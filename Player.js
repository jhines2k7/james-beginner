class Player {
  playTurn(warrior) {

   if(warrior.feel().isEmpty() && warrior.health() >= 15) {
		  warrior.walk();
    } else if(warrior.feel().isEmpty() && warrior.health() < 15) {      
      warrior.rest();
    } else {
      warrior.attack();
    }
    
  }
}
