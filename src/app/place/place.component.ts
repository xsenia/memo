import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit { 
  public users = [
    {name: 'Иван'},
    {name: 'Боб'},
    {name: 'Алиса'}
  ];
  public selectedUser: any;
  public selectedCard: any;
  public cardName: any;
  public cards: any; //переменная для массива, полученного из сервиса  


  // private _cardsService: any; //переменная для сервиса, он будет подключен в конструкторе  
  // constructor(cardsServiceInnerVariable: CardsService) {
  //   this._cardsService = cardsServiceInnerVariable;
  // }
  // это можно записать проще:
  // constructor(private _cardsService: CardsService) {
  // }
  
  constructor(private _cardsService: CardsService) {
  }

  ngOnInit(): void { 
    this.cards = this._cardsService.getCardsArray(5);
  }

  public getAmount = (amount: any) => {
    if (!amount) {
      return;
    }
    this.cards = this._cardsService.getCardsArray(amount);
  }

  
}
