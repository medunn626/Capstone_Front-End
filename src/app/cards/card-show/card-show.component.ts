import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})
export class CardShowComponent implements OnInit {

  oneCard;

  constructor(
    private route : ActivatedRoute,
    private cardsService: CardsService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.cardsService.getOneCard(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.oneCard = response.json();
      });
    });
  }

}
