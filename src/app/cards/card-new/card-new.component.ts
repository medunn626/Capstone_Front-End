import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {

  newCard = <any>{};
  createCardFailure: boolean;

  constructor(
    private router : Router,
    private cardsService : CardsService,
  ) { }

  ngOnInit() {

  }

  saveCard(newCard) {
    console.log("saving card");
    console.log(newCard);
    this.cardsService.saveCard(newCard)
    .subscribe(
      response => {
        console.log(response.json());
        let data = response.json();
        console.log('Data is', data)
        console.log('Data ID is', data.card.id)
        this.createCardFailure = false
        this.router.navigate(["/cards/" + data.card.id]);
      },
      err => {
        console.log('Error is', err)
        this.createCardFailure = true
      }
    )
  }

}
