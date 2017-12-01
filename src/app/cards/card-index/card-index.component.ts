import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Router } from '@angular/router';

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
        this.cardsService.deleteCardSuccess = false
        this.cardsService.deleteCardFailure = true
      }
    );
  }

  constructor(
    public cardsService : CardsService,
    public router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/'])
    } else {
      this.cardsService.getAllCards()
      .subscribe(response => {
        this.allCards = response.json()['cards']
      });
    }
  }

}
