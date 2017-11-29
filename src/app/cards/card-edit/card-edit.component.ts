import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  updatedCard = <any>{};

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private cardsService : CardsService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.cardsService.getOneCard(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.updatedCard = response.json();
      });
    });
  }

  updateCard(updatedCard) {
    console.log("updating card yo!");
    this.cardsService.updateCard(updatedCard)
    .subscribe(response => {
      console.log(response.json());
      let card = response.json();
      this.router.navigate(["/cards/" + card.id]);
    });
  }

}
