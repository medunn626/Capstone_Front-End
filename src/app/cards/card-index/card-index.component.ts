import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-index',
  templateUrl: './card-index.component.html',
  styleUrls: ['./card-index.component.css']
})
export class CardIndexComponent implements OnInit {

  allCards = [];

  deleteCard(deletedCard) {
    this.cardsService.deleteCard(deletedCard)
    .subscribe(
      response => {
        let cardIndex = this.allCards.indexOf(deletedCard);
        this.allCards.splice(cardIndex, 1);
        this.cardsService.deleteCardSuccess = true
        this.cardsService.deleteCardFailure = false
      },
      err => {
        console.log('Error is', err)
        this.cardsService.deleteCardSuccess = false
        this.cardsService.deleteCardFailure = true
      }
    );
  }

  constructor(
    private cardsService : CardsService,

  ) { }

  ngOnInit() {
    this.cardsService.getAllCards()
      .subscribe(response => {
        console.log(response.json());
        this.allCards = response.json()['cards']
        console.log('All cards are', this.allCards)
      });
  }

}
