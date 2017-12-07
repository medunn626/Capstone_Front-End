import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { CardsService } from '../cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-send',
  templateUrl: './card-send.component.html',
  styleUrls: ['./card-send.component.css']
})
export class CardSendComponent implements OnInit {

  oneCard;

  constructor(
    private route : ActivatedRoute,
    public cardsService: CardsService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.cardsService.getOneCard(param.id)
      .subscribe(response => {
        this.oneCard = response.json()
      });
    });
  }

}
