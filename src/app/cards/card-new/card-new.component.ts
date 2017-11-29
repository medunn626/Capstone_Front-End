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
  			.subscribe(response => {
			console.log(response.json());
			let card = response.json();
			this.router.navigate(["/cards/" + card.id]);
		})
  }

}
