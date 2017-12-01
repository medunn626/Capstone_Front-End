import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { CardsService } from '../cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})
export class CardShowComponent implements OnInit {

  oneCard;

  constructor(
    private route : ActivatedRoute,
    public cardsService: CardsService,
    public router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/'])
    } else {
      this.route.params.forEach( param => {
        this.cardsService.getOneCard(param.id)
        .subscribe(response => {
          console.log(response.json())
          this.oneCard = response.json()
          console.log('The one card is', this.oneCard)
        });
      });
    }
  }

}
