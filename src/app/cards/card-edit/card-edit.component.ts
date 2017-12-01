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
    public cardsService : CardsService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/'])
    } else {
      this.route.params.forEach( param => {
        this.cardsService.getOneCard(param.id)
        .subscribe(response => {
          console.log(response.json());
          this.updatedCard = response.json();
        });
      });
    }
  }

  updateCard(updatedCard) {
    console.log("updating card yo!");
    this.cardsService.updateCard(updatedCard)
    .subscribe(
      response => {
        console.log(response.json());
        let data = response.json();
        console.log('Data is', data)
        console.log('Data ID is', data.card.id)
        this.router.navigate(["/cards/" + data.card.id]);
    },
    err => {
      console.log('Error is', err)
      this.cardsService.updateCardFailure = true
    }
  )
}

}
