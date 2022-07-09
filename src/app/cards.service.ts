export class CardsService {

  public cards =  ["0C","0D","0H","0S","2C","2D","2H","2S","3C","3D","3H","3S","4C","4D","4H","4S","5C","5D","5H","5S","6C","6D","6H","6S","7C","7D","7H","7S","8C","8D","8H","8S","9C","9D","9H","9S","AC","AD","AH","AS","JC","JD","JH","JS","KC","KD","KH","KS","QC","QD","QH","QS"]; 
  

  constructor() { }

  public getAll() {
    return this.cards;
  }

  public getCardsArray = (amount: any) => {
    function randomizeArray(arr: any){
      return arr.sort(() => Math.random() - 0.5); 
    }
    const randomCardArr = randomizeArray(this.cards);  
    const randomArrShot = randomCardArr.slice(0,amount);
    const randomArrDuble = randomArrShot.concat(randomArrShot);
    const randomArrDubleRandom = randomizeArray(randomArrDuble);
    const gameCards = randomArrDubleRandom.map((card: any, i: any) => {
      const oneCard = {
          id: i, 
          name: card,
          opened: true,
          guessed: false
      };
      return oneCard;
    });     
    return gameCards; 
  }
  
}
