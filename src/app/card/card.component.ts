import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardName: any;
  @Output() cardSelected: EventEmitter<any> = new EventEmitter;

  public openClass = 'open';  

  constructor() { }

  ngOnInit(): void {
  }

  cardOpen() {
      if (this.openClass == 'open') {
          this.openClass = 'close';
      } else {
          this.openClass = 'open';
      }
  }

  cardType() {
    this.cardSelected.emit();
  }

}
